import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';

import { CdkLambdaUrlsStack } from './CdkLambdaUrlsStack';

export class IamRole {
    public static assignIAMRole(context: CdkLambdaUrlsStack) {

        // Create an IAM role for the Lambda function
        const lambdaRole = new iam.Role(context, 'LambdaRole', {
            assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
        });

        // Attach necessary policies to the Lambda role for URL invocation
        lambdaRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'));
        lambdaRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AWSLambda_FullAccess'));
        return lambdaRole;
    }

    public static grantPermissionForLambda(lambdaFunction: lambda.IFunction) {
        // Grant permissions for the Lambda function to be invoked via its function URL
        lambdaFunction.grantInvoke(new iam.ServicePrincipal('lambda.amazonaws.com'));
    }
}
