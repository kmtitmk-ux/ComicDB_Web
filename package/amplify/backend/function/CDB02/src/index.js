/* Amplify Params - DO NOT EDIT
    API_COMICDB_CDB02TABLE_ARN
    API_COMICDB_CDB02TABLE_NAME
    API_COMICDB_GRAPHQLAPIIDOUTPUT
    ENV
    REGION
    STORAGE_COMICDB_BUCKETNAME
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
    API_COMICDB_API_COMICDB_CDB02TABLE_NAME_ARN
    API_COMICDB_API_COMICDB_CDB02TABLE_NAME_NAME
    API_COMICDB_GRAPHQLAPIIDOUTPUT
    ENV
    REGION
    STORAGE_COMICDB_BUCKETNAME
Amplify Params - DO NOT EDIT */
const { S3Client, GetObjectCommand, DeleteObjectCommand, ListObjectsV2Command, PutObjectCommand, NoSuchKey, S3ServiceException } = require("@aws-sdk/client-s3");
const s3 = new S3Client({});
const { DynamoDBClient, BatchWriteItemCommand } = require("@aws-sdk/client-dynamodb");
const dynamoDBClient = new DynamoDBClient({});
const { v4: uuidv4 } = require("uuid");
const dayjs = require("dayjs");

const STORAGE_COMICDB_BUCKETNAME = process.env.STORAGE_COMICDB_BUCKETNAME;
const API_COMICDB_CDB02TABLE_NAME = process.env.API_COMICDB_CDB02TABLE_NAME;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const reWriteData = [];
    const listData = await s3.send(
        new ListObjectsV2Command({
            Bucket: STORAGE_COMICDB_BUCKETNAME,
            Prefix: "edited_comment/",
            Delimiter: "/"
        })
    );
    if (listData.Contents) {
        for (const v of listData.Contents) {
            const getData = await processS3getObjet(v);
            const lines = getData.split(/\r|\n/).filter(Boolean);
            for (const line of lines) {
                reWriteData.push(JSON.parse(line));
            }
        }
    }

    // 25件に分割
    const chunks = ((array, size) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    })(reWriteData, 25);
    for (const chunk of chunks) {
        const requestItems = chunk.map(data => ({
            PutRequest: {
                Item: {
                    id: { S: uuidv4() },
                    content: { S: data.comment },
                    createdAt: { S: data.date ?? dayjs().toISOString() },
                    dataType: { S: "comment" },
                    postId: { S: data.id },
                    reply: { S: "" },
                    updatedAt: { S: dayjs().toISOString() },
                    userId: { S: " " },
                    __typename: { S: "CDB02" },
                }
            }
        }));
        const batchWriteParam = {
            RequestItems: {
                [API_COMICDB_CDB02TABLE_NAME]: requestItems
            }
        };
        console.info("BatchWriteItem REQ", JSON.stringify(batchWriteParam.RequestItems[API_COMICDB_CDB02TABLE_NAME]));
        let response = await dynamoDBClient.send(new BatchWriteItemCommand(batchWriteParam));
        while (Object.keys(response.UnprocessedItems || {}).length > 0) {
            response = await client.send(new BatchWriteItemCommand({
                RequestItems: response.UnprocessedItems
            }));
        }
        const input = {
            Bucket: STORAGE_COMICDB_BUCKETNAME,
            Key: "edited_comment/50.jsonl",
        };
        await s3.send(new DeleteObjectCommand(input));

        const originalData = await processS3getObjet({ Key: "original_comment/comments.jsonl" });
        const lines = originalData.split(/\r?\n/);
        await s3.send(new PutObjectCommand({
            Bucket: STORAGE_COMICDB_BUCKETNAME,
            Key: "original_comment/comments.jsonl",
            Body: lines.slice(50).join("\n"),
            ContentType: 'application/x-ndjson',
        }));
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


async function processS3getObjet(v) {
    try {
        const response = await s3.send(
            new GetObjectCommand({
                Bucket: STORAGE_COMICDB_BUCKETNAME,
                Key: v.Key,
            }),
        );
        return await response.Body.transformToString();
    } catch (caught) {
        if (caught instanceof NoSuchKey) {
            console.error(
                `Error from S3 while getting object "${key}" from "${bucketName}". No such key exists.`,
            );
        } else if (caught instanceof S3ServiceException) {
            console.error(
                `Error from S3 while getting object from ${bucketName}.  ${caught.name}: ${caught.message}`,
            );
        } else {
            throw caught;
        }
    }
}
