# Setting up basic Serverless Example

## Setting up and deploying

### Install Serverless

`npm install serverless --global`

### Create a new serverless AWS project

`serverless create --template aws-nodejs`

### Login or signup to the serverless Dashboard

`sls login`

### Create an AWS profile

When logged into the serverless dashboard goto org -> providers -> add  
Then work through the add provider for aws wizard to setup your account details and create a role

### Create an app in the serverless dashboard

Click crate app button in top right and then select existing project  
Fill in the app and service names and copy that output to put back into your `serverless.yml` file  
Click deploy and done

## Notes and Examples

### Deploying the service

`sls deploy`

### Debug locally

`yarn start`

### Using Debug in VS Code.

You can VS Code debug settings by following the below link  
https://serverless-stack.com/examples/how-to-debug-lambda-functions-with-visual-studio-code.html

### Deleting and recreating Dynamo DB

In the `serverless.yml` file the line below forces the dynamo db to be destroyed on each deployment.  
This value for `DeletionPolicy` should be changed to `Retain` but will cause errors on each deploy

```
resources:
  Resources:
    diceTable:
      Type: AWS::DynamoDB::Table
      DeletionPolicy: Delete
```

### Main learning resource

https://www.serverless.com/learn/courses/full-stack-application-development-on-aws/
