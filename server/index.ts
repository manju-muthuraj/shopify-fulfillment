import { EventHandler } from './src/plugins/EventHandler';
import { log } from './src/utils/LoggerUtil';

export const handler = async (event: any): Promise<any> => {
    try {
        log.info(`Processing the event: ${JSON.stringify(event)}`);
        const response = await new EventHandler().processEvents(event);
        return JSON.stringify(response.body);
    } catch (error) {
        log.error(`Error handler : ${error}`);
        throw error;
    } finally {
        log.info(`End of execution`);
    }
};
