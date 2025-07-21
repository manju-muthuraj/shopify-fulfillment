import {ISecrets} from './IShopify';
import {StediHelper} from './StediHelper';
import {log} from '../utils/LoggerUtil';
import {ShopifyHelper} from "./ShopifyHelper";

export class ShopifyController {

    private static secretName = process.env.SECRET_NAME || 'STEDIKEYS';

    public static async shopifyFulfillment(): Promise<any> {
        log.info(`Inside shopifyFulfillment`);

        const secrets: ISecrets = await StediHelper.getSecretValues(this.secretName);

        // Get the assigned fulfillment orders from the shopify
        const fulfillmentOrders = await ShopifyHelper.getAssignedFulfillmentOrders(secrets);

        // Get the JSON representation of fulfillment order with transaction groups
        const transformedPayload = await StediHelper.invokeMapping(fulfillmentOrders, secrets);

        // Get the 940 EDI after the transformation
        const generatedEdi = await StediHelper.generateEdi(transformedPayload, secrets);
        log.info(`Generated EDI : ${JSON.stringify(generatedEdi.body)}`);

        // Accept the fulfillment once the partner receives the EDI 940
        return generatedEdi;
    }
}
