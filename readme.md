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
      1. S3 bucket upload
      2. an SNS topic
      3. HTTP endpoints created via API Gateway
      4. ...
   2. API Gateway
```
    events:
     - http:
         path: index
         method: get
```
3. The way of deployment
   1. Packaging service
   1. Excluding development dependencies