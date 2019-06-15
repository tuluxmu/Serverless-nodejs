'use strict';
const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1'
});
let dynamoDbConfig = null;
if (process.env.STAGE) {
  dynamoDbConfig = {
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  }
}
const dynamoDb = new AWS.DynamoDB.DocumentClient(dynamoDbConfig);
const TableName = process.env.TABLE_NAME;

module.exports.hello = async (event) => {
  const params = {
    TableName,
    Item: {
      userId: 'Lucy.Tu'
    }
  };
  console.log('=====TableName', process.env.TABLE_NAME, process.env.STAGE, dynamoDbConfig);
  async function putItem(params) {
    return new Promise((resolve, reject) => {
      dynamoDb.put(params, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
  try {
    await putItem(params);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Put Item into DynamoDB Succesuffly!',
        input: event,
      }, null, 2),
    };
  } catch(error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: `error:::${error}`
      }),
    };
  }
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
