# CDK Infra Chassis

## Overview

CDK Infra Chassis is a project for building AWS Cloud Development Kit (CDK) infrastructure required for the Stedi Plugin. 
## Usage

Bootstrap creates the CloudFormation stack
  ```bash
  npm run bootstrap
  ```

To deploy the Stack

```bash
  npm run deploy
  ```

## Configuration

Before running the cdk scripts, make sure to populate the `env.yml` file with the following values:

```yaml
API_KEY: 'STEDI_API_KEY'
PARTNERSHIP_ID: 'PARTNERSHIP_ID'
EDI_FILE_NAME: 'EDI_FILE_NAME'
TRANSACTION_SETTINGS_ID: 'TRANSACTION_ID'
MAP_ID: 'YOUR_MAP_ID'
REGION: 'us-west-2'
ACCOUNT_ID: 'AWS_YOUR_ACCOUNT_ID'
````

Get the API_KEY, PARTNERSHIP_ID, TRANSACTION_SETTINGS_ID & MAP_ID from the Stedi platform.