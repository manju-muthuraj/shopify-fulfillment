import * as got from 'got';
import {log} from "../utils/LoggerUtil";
import {ISecrets} from "./IShopify";

export class ShopifyHelper {
    private static readonly STORE_NAME: string = 'my-test-data-store';
    private static readonly LOCATION_ID: number = 68618191036;
    private static readonly GET_FULFILLMENT_REQUESTED_URL: string = `https://${this.STORE_NAME}.myshopify.com/admin/api/2023-10/assigned_fulfillment_orders.json?assignment_status=fulfillment_requested&location_ids[]=${this.LOCATION_ID}`;

    public static async getAssignedFulfillmentOrders(secrets: ISecrets) {
        try {
            let options = {
                headers: this.getHeaders(secrets)
            };

            const fulfillmentOrders = await got.get(this.GET_FULFILLMENT_REQUESTED_URL, options);

            const sanitizeFulfillmentOrders: any = fulfillmentOrders.body.replace(/\\n/g, '') as any;
            return Promise.resolve(sanitizeFulfillmentOrders);
        } catch (e) {
            log.error(`Error getting the the fulfillment orders: `, e);
        }
    }

    private static getHeaders(secrets: ISecrets) {
        return {
            'X-Shopify-Access-Token': secrets.SHOPIFY_ACCESS_TOKEN,
            'content-type': 'application/json'
        }
    }
}
