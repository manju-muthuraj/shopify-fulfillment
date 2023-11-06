import { ISecrets, IShopifyFulfilmentOrder } from './IShopify';
import { Utils } from './Utils';
import { log } from '../utils/LoggerUtil';

export class ShopifyController {

    private static secretName = process.env.SECRET_NAME || 'STEDIKEYS';

    public static async shopifyFulfillment(payload: IShopifyFulfilmentOrder): Promise<any> {
        log.info(`Inside shopifyFulfillment: ${JSON.stringify(payload)}`);

        log.info(`Secret Name: ${this.secretName}`);
        const secrets: ISecrets = await Utils.getSecretValues(this.secretName);

        const transformedPayload = await Utils.invokeMapping(payload, secrets);
        const generatedEdi = await Utils.generateEdi(transformedPayload, secrets);
        log.info(`Generated EDI : ${JSON.stringify(generatedEdi.body)}`);
        return generatedEdi;
    }
}
