interface Destination {
    id: number;
    address1: string;
    address2: string;
    city: string;
    company: string;
    country: string;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    province: string;
    zip: string;
}

interface DeliveryMethod {
    id: number;
    method_type: string;
    min_delivery_date_time: string;
    max_delivery_date_time: string;
}

interface FulfillmentHold {
    reason: string;
    reason_notes: string;
}

interface InternationalDuties {
    incoterm: string;
}

interface LineItem {
    id: number;
    shop_id: number;
    fulfillment_order_id: number;
    line_item_id: number;
    inventory_item_id: number;
    quantity: number;
    fulfillable_quantity: number;
    variant_id: number;
}

interface RequestOptions {
    shipping_method: string;
    note: string;
    date: string;
}

interface MerchantRequest {
    message: string;
    request_options: RequestOptions;
    kind: string;
}

interface AssignedLocation {
    address1: string;
    address2: string;
    city: string;
    country_code: string;
    location_id: number;
    name: string;
    phone: string;
    province: string;
    zip: string;
}

interface UpdatedAt {
    created_at: string;
}

export interface IShopifyFulfilmentOrder {
    assigned_location_id: number;
    destination: Destination;
    delivery_method: DeliveryMethod;
    fulfill_at: string;
    fulfill_by: string;
    fulfillment_holds: FulfillmentHold[];
    id: number;
    international_duties: InternationalDuties;
    line_items: LineItem[];
    order_id: number;
    request_status: string;
    shop_id: number;
    status: string;
    supported_actions: string[];
    merchant_requests: MerchantRequest[];
    assigned_location: AssignedLocation;
    created_at: string;
    updated_at: UpdatedAt;
}

export interface ITransactionGroup {
    filename: string,
    "transactionGroups": [
        ITransactions
    ]
}

export interface ITransactions {
    "transactionSettingId": string,
    "transactions": [
    ]
}

export interface ISecrets {
    API_KEY: string;
    PARTNERSHIP_ID: string;
    EDI_FILE_NAME: string;
    TRANSACTION_SETTINGS_ID: string;
    MAP_ID: string;
}
