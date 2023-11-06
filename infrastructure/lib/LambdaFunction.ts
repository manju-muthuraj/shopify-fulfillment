import * as lambda from 'aws-cdk-lib/aws-lambda';
import { CfnOutput } from 'aws-cdk-lib';
import { CdkLambdaUrlsStack } from './CdkLambdaUrlsStack';

export class lambdaUrlFunction {

    public static lambdaUrl(context: CdkLambdaUrlsStack, lambdaFn: lambda.IFunction) {

        const cors = {allowedOrigins: ['*']};

        const lambdaUrl = lambdaFn.addFunctionUrl({
            authType: lambda.FunctionUrlAuthType.NONE,
            cors: cors
        });

        new CfnOutput(context, 'FunctionUrl ', {value: lambdaUrl.url});
    }
}
