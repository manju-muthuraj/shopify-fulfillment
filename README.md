# Shopify EDI Fulfillment Integration

This project provides a serverless solution for integrating Shopify with an EDI provider. It automatically fetches fulfillment orders from Shopify, transforms them into an EDI 940 Warehouse Shipping Order, and sends it to your trading partner.

The primary goal of this application is to automate the process of converting Shopify fulfillment orders into a standardized EDI format that can be sent to a trading partner. The core functionality includes:

- **Fetching Fulfillment Orders**: The service retrieves assigned fulfillment orders directly from the Shopify API.
- **Data Transformation**: It uses a transformation service's mapping capabilities to transform the JSON representation of the Shopify order into a format compatible with the EDI 940 standard.
- **EDI Generation**: After the transformation, the service generates the final EDI 940 document.
- **Fulfillment Confirmation**: Once the EDI 940 is successfully generated and sent, the service can be extended to accept the fulfillment request in Shopify, completing the cycle.