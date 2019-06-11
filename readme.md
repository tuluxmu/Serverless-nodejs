1. First
   1. Create a new service
      ```
      $ serverless create --template aws-nodejs --path my-service
      ```
   2. Deploy
      ```
      serverless deploy
      ```
2. Second
   1. Lambda
      1. S3 bucket upload
      2. an SNS topic
      3. HTTP endpoints created via API Gateway
   2. API Gateway
   