import { ShopifyController } from './ShopifyController';
import { log } from '../utils/LoggerUtil';

export class EventHandler {
    constructor() {
    }

    public async processEvents(event: any): Promise<any> {
        log.info(`Received Event: ${JSON.stringify(event)}`);
        try {
            return await ShopifyController.shopifyFulfillment(event.body);
        } catch (error) {
            log.error(`Error processing event: ${JSON.stringify(event)}, Error: ${error}`);
        } finally {
            log.info(`finally of process event`);
        }
    }
}
