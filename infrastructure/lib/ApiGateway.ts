import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { CdkLambdaUrlsStack } from './CdkLambdaUrlsStack';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class ApiGateway {

  public static createAPIGateway(th: CdkLambdaUrlsStack, lambdaFunc: lambda.IFunction) {

    const api = new apigateway.RestApi(th, 'stedifulfilment', {
      restApiName: 'stedi',
    });

    const lambdaIntegration = new apigateway.LambdaIntegration(lambdaFunc);

    const resource = api.root.addResource('order');

    resource.addMethod('POST', lambdaIntegration);
  }

}
