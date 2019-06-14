1. First
   1. Create a new service
```
$ serverless create --template aws-nodejs --path my-service
```
   2. Deploy
      1. Getting your AWS credentials using OKTA CLI
```
~/.okta/awscli sts get-caller-identity
serverless deploy --aws-profile okta-rnd-team_524621635179
```
2. Second
   1. Lambda
      1. Trigger Events
         1. S3 bucket upload
         2. an SNS topic
         3. HTTP endpoints created via API Gateway
         4. ...
      2. Invoke Lambda Function Locally
```
serverless invoke local --function hello
``` 
   2. API Gateway
    1. Add Trigger Event
    
```
    events:
     - http:
         path: index
         method: get
```
**How to lauch serverless locally**
```
serverless offline
```
3. DynamoDB
  1. AWS Resources
  Anything that can be defined in CloudFormation is supported by the Serverless Framework
   2. Launch DynamoDB Locally
```
var putParams = {
    TableName: 'testTable',
    Item: { 
        userId: 'Lucy.Tu'
    }
};
docClient.put(putParams, function(err, data) {
    if (err) {
         console.log('===err', err);
    }
    else {
        console.log('successfully!');
    }
});

```  
**How to Start and Remove Dynamodb Locally**
```
In CLI:
Start: sls dynamodb start
Remove: sls dynamodb remove
In Your JS File:
new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
})
``` 
  
4. The way of deployment
   1. Packaging service
   2. Excluding development dependencies
   3. Creating Stack
   4. Checking Stack create progress
   5. Uploading CloudFormation file to S3
   6. Uploading artifacts
   7. Uploading service serverless-nodejs.zip file to S3
   8. Validating template
   9. Updating Stack
   10. 