#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkLambdaUrlsStack } from '../lib/CdkLambdaUrlsStack';

const app = new cdk.App();
new CdkLambdaUrlsStack(app, 'stedi-fulfilment');
