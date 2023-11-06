export const handler = async (event: any): Promise<any> => {
    try {
        console.log(`Processing the event: ${JSON.stringify(event)}`);
        const response = event.body;
        return typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
    } catch (error) {
        console.log(`Error handler : ${error}`);
        throw error;
    } finally {
        console.log(`End of execution`);
    }
};
