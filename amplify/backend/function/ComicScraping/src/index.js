/* Amplify Params - DO NOT EDIT
  ENV
  REGION
Amplify Params - DO NOT EDIT */

const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const s3 = new S3Client({});
const { DynamoDBClient, QueryCommand, BatchWriteItemCommand } = require('@aws-sdk/client-dynamodb');
const dynamoDBClient = new DynamoDBClient({});
const axios = require('axios');
const cheerio = require('cheerio');
const dayjs = require('dayjs');
const FileType = require('file-type');
const { v4: uuidv4 } = require('uuid');
const url = 'https://b.hatena.ne.jp/q/Web漫画?&target=tag&sort=recent';

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    let writeRequests = [], queryResult = {};
    console.info(`EVENT: ${JSON.stringify(event)}`);
    switch (event.procType) {
        case 'addNewData': {
            let scrapingData = await getHtmlData();
            for (let v of scrapingData) {
                // クエリの実行
                queryResult = await dynamoDBClient.send(new QueryCommand({
                    TableName: process.env.ComicTable,
                    IndexName: 'byOrderByTitleByUrl',
                    KeyConditionExpression: '#title = :title AND #url = :url',
                    ExpressionAttributeNames: {
                        '#title': 'title',
                        '#url': 'url'
                    },
                    ExpressionAttributeValues: {
                        ':title': { S: v.title },
                        ':url': { S: v.url }
                    },
                }));
                console.info('クエリ結果:', queryResult);
                if (!queryResult.Count) {
                    writeRequests.push({
                        PutRequest: {
                            Item: {
                                id: { S: uuidv4() },
                                createdAt: { S: dayjs(v.date).format() },
                                errCount: { N: '0' },
                                description: { S: v.description },
                                img: { S: v.imageUrl },
                                like: { N: String(v.like) },
                                tags: { S: v.tags },
                                updatedAt: { S: dayjs().format() },
                                url: { S: v.url },
                                status: { N: '0' },
                                title: { S: v.title },
                                '__typename': { S: 'Comic' }
                            }
                        }
                    });
                }
            }
            break;
        }
        case 'checkData': {
            // クエリの実行
            queryResult = await dynamoDBClient.send(new QueryCommand({
                TableName: process.env.ComicTable,
                IndexName: 'byOrderByStatusByUpdatedAt',
                KeyConditionExpression: '#status = :status',
                ExpressionAttributeNames: { '#status': 'status' },
                ExpressionAttributeValues: { ':status': { N: '0' } },
                Limit: 1
                // ScanIndexForward: false
            }));
            for (let v of queryResult.Items) {
                let errFlg = await axios.get(v.url.S).then(async (res) => {
                    v.errCount = { N: '0' };
                }).catch(error => {
                    if (v.errCount.N >= 3) return true;
                    v.errCount = { N: String(Number(v.errCount.N) + 1) };
                    console.error('エラーが発生しました', error);
                });
                if (errFlg) {
                    continue;
                }
                v.updatedAt = { S: dayjs().format() };
                writeRequests.push({ PutRequest: { Item: v } });
            }
            break;
        }
        default:
    };
    // DynamoDB追加
    if (writeRequests.length) {
        let batchWriteParam = { RequestItems: { [process.env.ComicTable]: writeRequests } };
        console.info('BatchWriteItemCommand IN:', JSON.stringify(batchWriteParam));
        let batchWriteResult = await dynamoDBClient.send(new BatchWriteItemCommand(batchWriteParam));
        console.info('バッチ書き込みが成功しました:', batchWriteResult);
    }
    return {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};


/**
 * ウェブページのHTMLデータを取得
 */
async function getHtmlData() {
    let outParam = [];
    await axios.get(encodeURI(url)).then(async (response) => {
        const $ = cheerio.load(response.data);
        for (let element of $('.centerarticle-entry.is-image-entry-unit')) {
            let url = $(element).find('a[data-gtm-click-label="entry-search-result-item-title"]').attr('href'),
                title = $(element).find('a[data-gtm-click-label="entry-search-result-item-title"]').text().trim(),
                like = $(element).find('[data-gtm-click-label="entry-search-result-item-users"]').text().replace(' users', '').trim(),
                date = $(element).find('.entry-contents-date').text(),
                today = dayjs().add(9, 'hour').subtract(20, 'day'),
                imageUrl = $(element).find('[data-gtm-click-label="entry-search-result-item-image"]').attr('src'),
                description = $(element).find('.centerarticle-entry-summary').text(),
                tags = [];
            for (let li of $(element).find('.entrysearch-entry-tags').text().split(/\n|\r\n/).filter(Boolean)) {
                if (li.trim() && !['あとで読む', 'あとで読んだ'].includes(li.trim())) tags.push(li.trim());
            }
            tags = JSON.stringify(tags);
            console.info('date:', today.format('YYYY/MM/DD'), dayjs(date).format('YYYY/MM/DD'), tags);
            if (today.isAfter(dayjs(date))) break;
            outParam.push({
                date: date,
                description: description,
                imageUrl: imageUrl,
                like: like,
                tags: tags,
                title: title.trim(),
                url: url,
            });
        }
    }).catch(error => {
        console.error('エラーが発生しました', error);
    });

    // 画像取得
    for (let i in outParam) {
        await axios.get(outParam[i].imageUrl, { responseType: 'arraybuffer' }).then(async (res) => {
            let resFileType = await FileType.fromBuffer(res.data);
            outParam[i].imageUrl = dayjs(outParam[i].date).format('public/YYYY/MM/DD/') + dayjs().valueOf() + '.' + resFileType.ext;
            let putObjParam = {
                Bucket: process.env.BucketsName,
                Key: outParam[i].imageUrl,
                Body: Buffer.from(res.data)
            };
            console.info('PutObjectCommand IN:', putObjParam);
            await s3.send(new PutObjectCommand(putObjParam));
        }).catch(error => {
            console.error('エラーが発生しました', error);
        });
    }
    console.info('getHtmlData OUT:', outParam);
    return outParam;
}