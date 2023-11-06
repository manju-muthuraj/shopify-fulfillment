import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { CdkLambdaUrlsStack } from './CdkLambdaUrlsStack';

export interface ISecretsData {
    API_KEY: string,
    PARTNERSHIP_ID: string,
    EDI_FILE_NAME: string,
    TRANSACTION_SETTINGS_ID: string,
    MAP_ID: string,
    REGION: string,
    ACCOUNT_ID: string
}

export class createSecrets {
    public static secData: ISecretsData = new class implements ISecretsData {
        API_KEY: string;
        EDI_FILE_NAME: string;
        MAP_ID: string;
        PARTNERSHIP_ID: string;
        TRANSACTION_SETTINGS_ID: string;
        REGION: string;
        ACCOUNT_ID: string;
    };

    constructor() {
    }

    private static STEDIKEYS = 'STEDIKEYS';

    public static secretsValue(): ISecretsData {
        return createSecrets.readYaml();
    }

    public static cSecret(context: CdkLambdaUrlsStack) {
        createSecrets.secretsValue();
        return new secretsmanager.Secret(context, 'MySecret', {
            description: 'Lambda keys',
            secretName: this.STEDIKEYS,
            generateSecretString: {
                secretStringTemplate: JSON.stringify({
                    apiKey: createSecrets.secData.API_KEY,
                    partnerId: createSecrets.secData.PARTNERSHIP_ID,
                    ediFileName: createSecrets.secData.EDI_FILE_NAME,
                    tranSettingsId: createSecrets.secData.TRANSACTION_SETTINGS_ID,
                    mapId: createSecrets.secData.MAP_ID,
                }),
                generateStringKey: 'password'
            },
        });
    }

    private static readYaml(): ISecretsData {
        try {
            const yamlFile: string = fs.readFileSync('./env.yml', 'utf8');
            const config: any = yaml.load(yamlFile);
            console.log(`config ${JSON.stringify(config)}`);
            createSecrets.secData.MAP_ID = config.MAP_ID;
            createSecrets.secData.PARTNERSHIP_ID = config.PARTNERSHIP_ID;
            createSecrets.secData.API_KEY = config.API_KEY;
            createSecrets.secData.EDI_FILE_NAME = config.EDI_FILE_NAME;
            createSecrets.secData.TRANSACTION_SETTINGS_ID = config.TRANSACTION_SETTINGS_ID;
            createSecrets.secData.REGION = config.REGION;
            createSecrets.secData.ACCOUNT_ID = config.ACCOUNT_ID;
        } catch (err) {
            console.error(`Error reading the yaml file ::: ${err}`);
        }
        return createSecrets.secData;
    }
}
