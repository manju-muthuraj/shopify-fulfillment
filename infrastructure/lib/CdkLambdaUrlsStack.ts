import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import { createSecrets } from './Secrets';
import { ApiGateway } from './ApiGateway';
import { lambdaUrlFunction } from './LambdaFunction';
import { IamRole } from './IamRole';

export class CdkLambdaUrlsStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)

        const secret = createSecrets.cSecret(this);

        let region = createSecrets.secData.REGION;
        let accountId = createSecrets.secData.ACCOUNT_ID;

        const lambdaRole = IamRole.assignIAMRole(this);

        const lambdaFunc = new lambda.Function(this, 'lambda-function', {
            runtime: lambda.Runtime.NODEJS_18_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset(path.join(__dirname, '/../../server')),
            role: lambdaRole,
            environment: {
                SECRET_NAME: secret.secretName, // Pass the secret name to Lambda environment variable
            },
        });

        IamRole.grantPermissionForLambda(lambdaFunc);

        secret.grantRead(lambdaFunc);

        ApiGateway.createAPIGateway(this, lambdaFunc);

        lambdaUrlFunction.lambdaUrl(this, lambdaFunc);

    }
}
