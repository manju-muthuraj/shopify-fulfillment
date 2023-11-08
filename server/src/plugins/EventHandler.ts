import {ShopifyController} from './ShopifyController';
import {log} from '../utils/LoggerUtil';

export class EventHandler {
    constructor() {
    }

    public async processEvents(event: any): Promise<any> {
        log.info(`Received Event: ${JSON.stringify(event)}`);
        const fulfillmentRequestType = 'FULFILLMENT_REQUEST';
        try {
            const body = JSON.parse(event.body);
            if (body.kind === fulfillmentRequestType) {
                return await ShopifyController.shopifyFulfillment();
            } else {
                log.warn(`We're not supporting the event type ${event.body.kind}`);
                return;
            }

        } catch (error) {
            log.error(`Error processing event: ${error}`);
        }
    }
}
