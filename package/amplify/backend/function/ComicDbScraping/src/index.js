/* Amplify Params - DO NOT EDIT
ENV
REGION
Amplify Params - DO NOT EDIT */

const {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
} = require("@aws-sdk/client-s3");
const s3 = new S3Client({});
const {
    DynamoDBClient,
    QueryCommand,
    BatchWriteItemCommand,
} = require("@aws-sdk/client-dynamodb");
const dynamoDBClient = new DynamoDBClient({});
const axios = require("axios");
const cheerio = require("cheerio");
const dayjs = require("dayjs");
const path = require("path");
const url = require("url");
const { v4: uuidv4 } = require("uuid");

/**
 * @type {import("@types/aws-lambda").APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    let writeRequests = [],
        queryResult = {};
    console.info(`EVENT: ${JSON.stringify(event)}`);
    switch (event.procType) {
        case "addNewData":
        case "addHistoryData": {
            let url = "https://b.hatena.ne.jp/q/web漫画?page={pageCount}&target=tag&sort=recent&users=3";
            let pageCount = 1;
            if (event.procType === "addHistoryData") {
                try {
                    let getObjectCommandRes = await s3.send(
                        new GetObjectCommand({
                            Bucket: process.env.BucketsName,
                            Key: "pageCount.json",
                        })
                    );
                    getObjectCommandRes = await streamToString(getObjectCommandRes.Body);
                    pageCount = JSON.parse(getObjectCommandRes).pageCount;
                } catch (e) {
                    if (e.name !== "NoSuchKey") throw e;
                }
            }
            url = url.replace("{pageCount}", pageCount);
            let pageData = [];
            let scrapingData = await getHtmlData(url, event.procType, pageData);
            if (event.procType === "addHistoryData") {
                pageCount = pageData.length ? pageCount + 1 : 1;
                console.info("pageCount:", pageCount);
                await s3.send(
                    new PutObjectCommand({
                        Bucket: process.env.BucketsName,
                        Key: "pageCount.json",
                        Body: JSON.stringify({ pageCount: pageCount }),
                    })
                );
            }
            let c = 0;
            for (let v of scrapingData) {
                if (!writeRequests[c]) writeRequests.push([]);
                let item = {
                    addLike: { N: 0 },
                    author: { S: v.author },
                    createdAt: { S: dayjs(v.date).format() },
                    description: { S: v.description },
                    errCount: { N: "0" },
                    id: { S: uuidv4() },
                    img: { S: v.imageUrl },
                    like: { N: String(v.like) },
                    officialTitle: { S: v.officialTitle },
                    status: { N: "0" },
                    tags: { S: v.tags },
                    updatedAt: { S: dayjs().format() },
                    url: { S: v.url },
                    title: { S: v.title },
                    __typename: { S: "Comic" },
                };
                if (!v.officialTitle) delete item.officialTitle;
                if (!v.author) delete item.author;
                writeRequests[c].push({
                    PutRequest: {
                        Item: item,
                    },
                });
                if (writeRequests[c].length % 25 === 0) c++;
            }
            break;
        }
        case "checkData": {
            // クエリの実行
            const queryParam = {
                TableName: process.env.ComicTable,
                IndexName: "byOrderByStatusByUpdatedAt",
                KeyConditionExpression: "#status = :status",
                ExpressionAttributeNames: { "#status": "status" },
                ExpressionAttributeValues: { ":status": { N: "0" } },
                Limit: 160,
            };
            console.info("Query REQ", queryParam);
            queryResult = await dynamoDBClient.send(new QueryCommand(queryParam));
            console.info("Query RES", JSON.stringify(queryResult.Items));
            let c = 0;
            for (const v of queryResult.Items) {
                console.info("search url", v.url.S);
                let errFlg = await axios
                    .get(v.url.S)
                    .then(async () => {
                        v.errCount = { N: "0" };
                        return true;
                    })
                    .catch((error) => {
                        console.error(error);
                        if (v.errCount.N < 3) {
                            v.errCount = { N: String(Number(v.errCount.N) + 1) };
                            return true;
                        }
                        return false;
                    });
                if (!errFlg) continue;

                // いいね、タグ更新
                const searchTitle = `https://b.hatena.ne.jp/q/${v.title.S}?target=title`;
                console.info("search title", encodeURI(searchTitle));
                errFlg = await axios
                    .get(encodeURI(searchTitle))
                    .then(async (res) => {
                        const $ = cheerio.load(res.data);
                        const element = $(".centerarticle-entry.is-image-entry-unit")[0];
                        const url = $(element)
                            .find('a[data-gtm-click-label="entry-search-result-item-title"]')
                            .attr("href");
                        if (url !== v.url.S) {
                            console.info("URLが一致しません", url, v.url.S);
                            return true;
                        }
                        const tags = [];
                        let like = $(element).find('[data-gtm-click-label="entry-search-result-item-users"]')
                            .text()
                            .replace(" users", "")
                            .trim();
                        for (let li of $(element).find(".entrysearch-entry-tags").text().split(/\n|\r\n/).filter(Boolean)) {
                            if (li.trim() && !["あとで読む", "あとで読んだ"].includes(li.trim())) {
                                tags.push(li.trim());
                            }
                        }
                        v.tags = { S: JSON.stringify(tags) };
                        if (!v.addLike?.N) v.addLike = { N: "0" };
                        like = Number(like || 0) + Number(v.addLike.N);
                        v.like = { N: String(like) };
                        v.errCount = { N: "0" };
                        if (!v.officialTitle && !v.author) {
                            const editValue = await editOfficialTitleAndAuthor(v.title.S);
                            if (editValue.officialTitle) v.officialTitle = { S: editValue.officialTitle };
                            if (editValue.auhtor) v.author = { S: editValue.auhtor };
                        }
                        return true;
                    })
                    .catch((error) => {
                        console.error(error);
                        if (v.errCount.N < 3) {
                            v.errCount = { N: String(Number(v.errCount.N) + 1) };
                            return true;
                        }
                        return false;
                    });
                if (!errFlg) continue;

                // 更新
                v.updatedAt = { S: dayjs().format() };
                if (!writeRequests[c]) writeRequests.push([]);
                writeRequests[c].push({ PutRequest: { Item: v } });
                if (writeRequests[c].length !== 0 && writeRequests[c].length % 25 === 0) c++;
            }
            break;
        }
        default:
    };

    // DynamoDB追加
    for (const v of writeRequests) {
        if (v.length) {
            const batchWriteParam = {
                RequestItems: {
                    [process.env.ComicTable]: v
                }
            };
            console.info("BatchWriteItem REQ", batchWriteParam.RequestItems[process.env.ComicTable]);
            const batchWriteResult = await dynamoDBClient.send(new BatchWriteItemCommand(batchWriteParam));
            console.info("BatchWriteItem RES", batchWriteResult);
        }
    }
    return {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  },
        body: JSON.stringify("Hello from Lambda!"),
    };
};

/**
 * ウェブページのHTMLデータを取得
 */
async function getHtmlData(inUrl, procType, pageData) {
    console.info("getHtmlData IN:", inUrl);
    let outParam = [];
    await axios
        .get(encodeURI(inUrl))
        .then(async (response) => {
            const $ = cheerio.load(response.data);
            for (let element of $(".centerarticle-entry.is-image-entry-unit")) {
                let url = $(element)
                    .find('a[data-gtm-click-label="entry-search-result-item-title"]')
                    .attr("href"),
                    title = $(element)
                        .find('a[data-gtm-click-label="entry-search-result-item-title"]')
                        .text()
                        .trim(),
                    like = $(element)
                        .find('[data-gtm-click-label="entry-search-result-item-users"]')
                        .text()
                        .replace(" users", "")
                        .trim(),
                    date = $(element).find(".entry-contents-date").text(),
                    imageUrl = $(element)
                        .find('[data-gtm-click-label="entry-search-result-item-image"]')
                        .attr("src"),
                    description = $(element).find(".centerarticle-entry-summary").text(),
                    tags = [];
                pageData.push(element);
                for (let li of $(element)
                    .find(".entrysearch-entry-tags")
                    .text()
                    .split(/\n|\r\n/)
                    .filter(Boolean)) {
                    if (
                        li.trim() &&
                        !["あとで読む", "あとで読んだ", "あとで消す"].includes(li.trim())
                    )
                        tags.push(li.trim());
                }
                tags = JSON.stringify(tags);
                if (
                    procType === "addNewData" &&
                    dayjs().add(9, "hour").subtract(2, "day").isAfter(dayjs(date))
                )
                    break;
                const queryParam = {
                    TableName: process.env.ComicTable,
                    IndexName: "byOrderByTitleByUrl",
                    KeyConditionExpression: "#title = :title AND #url = :url",
                    ExpressionAttributeNames: {
                        "#title": "title",
                        "#url": "url",
                    },
                    ExpressionAttributeValues: {
                        ":title": { S: title },
                        ":url": { S: url },
                    },
                };
                console.info("Query REQ", queryParam);
                let queryResult = await dynamoDBClient.send(
                    new QueryCommand(queryParam)
                );
                console.info("Query RES", JSON.stringify(ueryResult.Items));
                let editValue = await editOfficialTitleAndAuthor(title.trim());
                if (queryResult.Count) {
                    outParam.push({
                        date: date,
                        description: description,
                        imageUrl: imageUrl,
                        like: like,
                        tags: tags,
                        title: title.trim(),
                        officialTitle: editValue.officialTitle,
                        author: editValue.author,
                        url: url,
                    });
                }
            }
        })
        .catch((error) => {
            console.error("エラーが発生しました", error);
        });

    // 画像取得
    for (let i in outParam) {
        try {
            const res = await axios.get(outParam[i].imageUrl);
            const ext = res.headers.get("content-type").replace("image/", ".");
            // S3に追加
            const buffer = await axios.get(outParam[i].imageUrl, {
                responseType: "arraybuffer",
            });
            outParam[i].imageUrl =
                dayjs(outParam[i].date).format("public/YYYY/MM/DD/") +
                dayjs().valueOf() +
                ext;
            const putObjParam = {
                Bucket: process.env.BucketsName,
                Key: outParam[i].imageUrl,
                Body: Buffer.from(buffer.data),
            };
            console.info("PutObject REQ", putObjParam);
            const putResult = await s3.send(new PutObjectCommand(putObjParam));
            console.info("PutObject RES", putResult);
        } catch (e) {
            console.error("エラーが発生しました", e);
        }
    }
    console.info("getHtmlData OUT:", outParam);
    return outParam;
}

// 正式タイトル名を作成する
async function editOfficialTitleAndAuthor(title) {
    const regex = / \| 少年ジャンプ＋$/;
    const outParam = {
        officialTitle: "",
        author: "",
    };
    if (regex.test(title)) {
        let edit = title.replace(regex, "").replace(/^\[.*?\]/, "");
        edit = edit.split(" - ");
        outParam.officialTitle = edit[0] ?? "";
        outParam.author = edit[1] ?? "";
    }
    console.info("editOfficialTitleAndAuthor", outParam);
    return outParam;
}

// ストリームを文字列に変換するヘルパー関数
async function streamToString(stream) {
    const chunks = [];
    for await (const chunk of stream) chunks.push(chunk);
    return Buffer.concat(chunks).toString("utf-8");
}
