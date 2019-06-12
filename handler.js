'use strict';
const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1'
});
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TableName = 'testTable';
module.exports.hello = async (event) => {
  const params = {
    TableName,
    Item: {
      userId: 'Lucy.Tu'
    }
  };
  async function putItem(params) {
    return new Promise((resolve, reject) => {
      dynamoDb.put(params, (error) => {
        if (error) {
          reject();
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
