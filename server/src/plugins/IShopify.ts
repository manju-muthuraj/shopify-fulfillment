interface Destination {
    id: number;
    address1: string;
    address2: string | null;
    city: string;
    company: string;
    country: string;
    email: string;
    first_name: string;
    last_name: string;
    phone: string | null;
    province: string | null;
    zip: string;
}

interface LineItem {
    id: number;
    shop_id: number;
    fulfillment_order_id: number;
    quantity: number;
    line_item_id: number;
    inventory_item_id: number;
    fillable_quantity: number;
    variant_id: number;
}

interface OutgoingRequest {
    message: string;
    request_options: {
        notify_customer: boolean;
    };
    sent_at: string;
    kind: string;
}

interface DeliveryMethod {
    id: number;
    method_type: string;
    min_delivery_date_time: string | null;
    max_delivery_date_time: string | null;
}

interface AssignedLocation {
    address1: string | null;
    address2: string | null;
    city: string | null;
    country_code: string;
    location_id: number;
    name: string;
    phone: string | null;
    province: string | null;
    zip: string | null;
}

export interface IShopifyFulfillmentOrder {
    id: number;
    shop_id: number;
    order_id: number;
    assigned_location_id: number;
    request_status: string;
    status: string;
    supported_actions: string[];
    destination: Destination;
    line_items: LineItem[];
    outgoing_requests: OutgoingRequest[];
    international_duties: null;
    fulfill_at: string;
    fulfill_by: null;
    fulfillment_holds: any[];
    created_at: string;
    updated_at: string;
    delivery_method: DeliveryMethod;
    assigned_location: AssignedLocation;
}

export interface ITransactionGroup {
    filename: string,
    "transactionGroups": [
        ITransactions
    ]
}

export interface ITransactions {
    "transactionSettingId": string,
    "transactions": []
}

export interface ISecrets {
    API_KEY: string;
    PARTNERSHIP_ID: string;
    EDI_FILE_NAME: string;
    TRANSACTION_SETTINGS_ID: string;
    MAP_ID: string;
    SHOPIFY_ACCESS_TOKEN: string
}
