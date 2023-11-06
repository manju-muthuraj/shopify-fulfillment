import { ISecrets, IShopifyFulfilmentOrder, ITransactionGroup, ITransactions } from './IShopify';
import { log } from '../utils/LoggerUtil';
import * as got from 'got';
import { GetSecretValueCommandOutput, SecretsManager } from '@aws-sdk/client-secrets-manager';

export class Utils {
    private static readonly MAPPING_URL = 'https://mappings.stedi.com/2021-06-01/mappings';
    private static readonly GENERATE_EDI_URL = 'https://partners.us.stedi.com/2022-01-01/x12/partnerships';

    public static async invokeMapping(payload: IShopifyFulfilmentOrder, secrets: ISecrets) {
        const data = payload.toString();

        log.info(`Payload ${data}`);

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Key ${secrets.API_KEY}`,
            },
            body: JSON.parse(data.replace(/\\n/g, '')),
            json: true
        };


        try {
            let transformedPayload = await got.post(`${this.MAPPING_URL}/${secrets.MAP_ID}/map`, config);
            log.info(`Transformed payload: ${JSON.stringify(transformedPayload.body)}`);
            transformedPayload.body = Utils.envelopeTransactionV2(transformedPayload.body, secrets);
            log.info(`Transformed payload with transaction group: ${JSON.stringify(transformedPayload.body)}`);
            return Promise.resolve(JSON.stringify(transformedPayload.body));
        } catch (e) {
            log.error(`Error in invoke mapping due to ${e}`);
        }
    }

    public static async generateEdi(payload: any, secrets: ISecrets) {
        const data = JSON.parse(payload);

        log.info(`Payload JSON: ${JSON.stringify(data)}`);

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Key ${secrets.API_KEY}`,
            },
            body: data,
            json: true
        };

        try {
            const transformedPayload = await got.post(`${this.GENERATE_EDI_URL}/${secrets.PARTNERSHIP_ID}/generate-edi`, config);
            log.info(`Transformed JSON to EDI: ${JSON.stringify(transformedPayload.body)}`);
            return Promise.resolve(transformedPayload);
        } catch (e) {
            log.info(`Error in generating edi due to ${e}`);
        }
    }

    private static envelopeTransactionV2(data: any, secrets: ISecrets): any {

        let transactionJSON: ITransactions = new class implements ITransactions {
            transactionSettingId: string;
            transactions: []
        };

        let ediJSON: ITransactionGroup = new class implements ITransactionGroup {
            filename: string;
            transactionGroups
        };

        ediJSON.transactionGroups = [transactionJSON];
        ediJSON.transactionGroups.push(transactionJSON);

        ediJSON.filename = secrets.EDI_FILE_NAME;
        ediJSON.transactionGroups[0].transactionSettingId = secrets.TRANSACTION_SETTINGS_ID;
        ediJSON.transactionGroups[0].transactions = data;
        log.info(`Enveloped payload:  ${JSON.stringify(ediJSON)}`);
        return ediJSON;
    }

    private static envelopeTransaction(data: any, secrets: ISecrets) {
        log.info(`data ${JSON.stringify(data)}`);
        let ediJSON: any = {
            "filename": secrets.EDI_FILE_NAME,
            "transactionGroups": [
                {
                    "transactionSettingId": secrets.TRANSACTION_SETTINGS_ID,
                    "transactions": []
                }
            ]
        };

        ediJSON.transactionGroups[0].transactions = data;
        log.info(`ediJSON ${JSON.stringify(ediJSON)}`);
        return ediJSON;
    }

    public static async getSecretValues(secretName: string): Promise<ISecrets> {
        try {
            // Retrieve the secret value from AWS Secrets Manager
            const sms: SecretsManager = new SecretsManager({ region: 'us-west-2'});
            const getSecretValueResponse: GetSecretValueCommandOutput = await sms.getSecretValue({SecretId: secretName});
            log.debug('getSecretValueResponse stringify ' + JSON.stringify(getSecretValueResponse));
            const secret = JSON.parse(getSecretValueResponse.SecretString);

            // Extract and return the secret values
            return {
                API_KEY: secret.apiKey,
                PARTNERSHIP_ID: secret.partnerId,
                EDI_FILE_NAME: secret.ediFileName,
                TRANSACTION_SETTINGS_ID: secret.tranSettingsId,
                MAP_ID: secret.mapId
            };
        } catch (error) {
            log.error('Error retrieving secret: ', error);
            throw new Error('Error retrieving secret values');
        }
    }
}
