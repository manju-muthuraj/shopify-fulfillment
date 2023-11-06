import { handler } from './index';
import { log } from './src/utils/LoggerUtil';

const shopifyFulfilmentOrder =
    {
        "assigned_location_id": 3183479,
        "destination": {
            "id": 54433189,
            "address1": "123 Amoebobacterieae St",
            "address2": "Unit 806",
            "city": "Ottawa",
            "company": "",
            "country": "Canada",
            "email": "bob@example.com",
            "first_name": "Bob",
            "last_name": "Bobsen",
            "phone": "(555)555-5555",
            "province": "Ontario",
            "zip": "K2P0V6"
        },
        "delivery_method": {
            "id": 64434189,
            "method_type": "local",
            "min_delivery_date_time": "2022-04-20T23:59:59-04:00",
            "max_delivery_date_time": "2022-04-28T23:59:59-04:00"
        },
        "fulfill_at": "2021-01-01",
        "fulfill_by": "2021-01-01",
        "fulfillment_holds": [
            {
                "reason": "incorrect_address",
                "reason_notes": "the apartment number is missing."
            }
        ],
        "id": 255858046,
        "international_duties": {
            "incoterm": "DAP"
        },
        "line_items": [
            {
                "id": 466157049,
                "shop_id": 3998762,
                "fulfillment_order_id": 1568020,
                "line_item_id": 466157049,
                "inventory_item_id": 6588097,
                "quantity": 1,
                "fulfillable_quantity": 1,
                "variant_id": 2385087
            }
        ],
        "order_id": 3183479,
        "request_status": "unsubmitted",
        "shop_id": 255858046,
        "status": "open",
        "supported_actions": [
            "create_fulfillment",
            "request_fulfillment",
            "cancel_fulfillment_order",
            "request_cancellation"
        ],
        "merchant_requests": [
            {
                "message": "Hello, World!",
                "request_options": {
                    "shipping_method": "pidgeon carrier",
                    "note": "handle with care",
                    "date": "2019-08-13T16:09:58-04:00"
                },
                "kind": "fulfillment_request"
            }
        ],
        "assigned_location": {
            "address1": "123 Amoebobacterieae St",
            "address2": "Unit 806",
            "city": "Ottawa",
            "country_code": "CA",
            "location_id": 17232953366,
            "name": "Bob Bobsen",
            "phone": "(555)555-5555",
            "province": "Ontario",
            "zip": "K2P0V6"
        },
        "created_at": "2022-01-01T11:00:00-01:00",
        "updated_at": {
            "created_at": "2022-01-01T11:00:00-01:00"
        }
    }
    
    
    
    const postmanEv = {
      "version": "2.0",
      "routeKey": "$default",
      "rawPath": "/",
      "rawQueryString": "",
      "headers": {
        "content-length": "2342",
        "x-amzn-tls-version": "TLSv1.2",
        "x-forwarded-proto": "https",
        "postman-token": "2c1e98e4-f19e-48e2-a672-2c9edc2a5ae4",
        "x-forwarded-port": "443",
        "x-forwarded-for": "14.194.217.202",
        "accept": "*/*",
        "x-amzn-tls-cipher-suite": "ECDHE-RSA-AES128-GCM-SHA256",
        "x-amzn-trace-id": "Root=1-6544ff40-25050ca728a6d6476e824d6b",
        "host": "v4wurdoytkimjkvvlibho6zixy0xvhtc.lambda-url.us-east-1.on.aws",
        "content-type": "application/json",
        "cache-control": "no-cache",
        "accept-encoding": "gzip, deflate, br",
        "user-agent": "PostmanRuntime/7.29.2"
      },
      "requestContext": {
        "accountId": "anonymous",
        "apiId": "v4wurdoytkimjkvvlibho6zixy0xvhtc",
        "domainName": "v4wurdoytkimjkvvlibho6zixy0xvhtc.lambda-url.us-east-1.on.aws",
        "domainPrefix": "v4wurdoytkimjkvvlibho6zixy0xvhtc",
        "http": {
          "method": "POST",
          "path": "/",
          "protocol": "HTTP/1.1",
          "sourceIp": "14.194.217.202",
          "userAgent": "PostmanRuntime/7.29.2"
        },
        "requestId": "69fdf2fd-db52-4fd9-ae4f-751c69548dac",
        "routeKey": "$default",
        "stage": "$default",
        "time": "03/Nov/2023:14:10:08 +0000",
        "timeEpoch": 1699020608076
      },
      //"body": {"assigned_location_id": 3183479,"destination": {"id": 54433189,"address1": "123 Amoebobacterieae St","address2": "Unit 806","city": "Ottawa","company": "","country": "Canada","email": "bob@example.com","first_name": "Bob","last_name": "Bobsen","phone": "(555)555-5555","province": "Ontario","zip": "K2P0V6"},"delivery_method": {"id": 64434189,"method_type": "local","min_delivery_date_time": "2022-04-20T23:59:59-04:00","max_delivery_date_time": "2022-04-28T23:59:59-04:00"},"fulfill_at": "2021-01-01","fulfill_by": "2021-01-01","fulfillment_holds": [{"reason": "incorrect_address","reason_notes": "the apartment number is missing."}],"id": 255858046,"international_duties": {"incoterm": "DAP"},"line_items": [{    "id": 466157049,    "shop_id": 3998762,    "fulfillment_order_id": 1568020,    "line_item_id": 466157049,    "inventory_item_id": 6588097,    "quantity": 1,    "fulfillable_quantity": 1,    "variant_id": 2385087}],"order_id": 3183479,"request_status": "unsubmitted","shop_id": 255858046,"status": "open","supported_actions": ["create_fulfillment","request_fulfillment","cancel_fulfillment_order","request_cancellation"],"merchant_requests": [{    "message": "Hello, World!",    "request_options": {        "shipping_method": "pidgeon carrier",        "note": "handle with care",        "date": "2019-08-13T16:09:58-04:00"    },    "kind": "fulfillment_request"}],"assigned_location": {"address1": "123 Amoebobacterieae St","address2": "Unit 806","city": "Ottawa","country_code": "CA","location_id": 17232953366,"name": "Bob Bobsen","phone": "(555)555-5555","province": "Ontario","zip": "K2P0V6"},"created_at": "2022-01-01T11:00:00-01:00","updated_at": {"created_at": "2022-01-01T11:00:00-01:00"}},
      "body": "{\n    \"assigned_location_id\": 3183479,\n    \"destination\": {\n        \"id\": 54433189,\n        \"address1\": \"123 Amoebobacterieae St\",\n        \"address2\": \"Unit 806\",\n        \"city\": \"Ottawa\",\n        \"company\": \"\",\n        \"country\": \"Canada\",\n        \"email\": \"bob@example.com\",\n        \"first_name\": \"Bob\",\n        \"last_name\": \"Bobsen\",\n        \"phone\": \"(555)555-5555\",\n        \"province\": \"Ontario\",\n        \"zip\": \"K2P0V6\"\n    },\n    \"delivery_method\": {\n        \"id\": 64434189,\n        \"method_type\": \"local\",\n        \"min_delivery_date_time\": \"2022-04-20T23:59:59-04:00\",\n        \"max_delivery_date_time\": \"2022-04-28T23:59:59-04:00\"\n    },\n    \"fulfill_at\": \"2021-01-01\",\n    \"fulfill_by\": \"2021-01-01\",\n    \"fulfillment_holds\": [\n        {\n            \"reason\": \"incorrect_address\",\n            \"reason_notes\": \"the apartment number is missing.\"\n        }\n    ],\n    \"id\": 255858046,\n    \"international_duties\": {\n        \"incoterm\": \"DAP\"\n    },\n    \"line_items\": [\n        {\n            \"id\": 466157049,\n            \"shop_id\": 3998762,\n            \"fulfillment_order_id\": 1568020,\n            \"line_item_id\": 466157049,\n            \"inventory_item_id\": 6588097,\n            \"quantity\": 1,\n            \"fulfillable_quantity\": 1,\n            \"variant_id\": 2385087\n        }\n    ],\n    \"order_id\": 3183479,\n    \"request_status\": \"unsubmitted\",\n    \"shop_id\": 255858046,\n    \"status\": \"open\",\n    \"supported_actions\": [\n        \"create_fulfillment\",\n        \"request_fulfillment\",\n        \"cancel_fulfillment_order\",\n        \"request_cancellation\"\n    ],\n    \"merchant_requests\": [\n        {\n            \"message\": \"Hello, World!\",\n            \"request_options\": {\n                \"shipping_method\": \"pidgeon carrier\",\n                \"note\": \"handle with care\",\n                \"date\": \"2019-08-13T16:09:58-04:00\"\n            },\n            \"kind\": \"fulfillment_request\"\n        }\n    ],\n    \"assigned_location\": {\n        \"address1\": \"123 Amoebobacterieae St\",\n        \"address2\": \"Unit 806\",\n        \"city\": \"Ottawa\",\n        \"country_code\": \"CA\",\n        \"location_id\": 17232953366,\n        \"name\": \"Bob Bobsen\",\n        \"phone\": \"(555)555-5555\",\n        \"province\": \"Ontario\",\n        \"zip\": \"K2P0V6\"\n    },\n    \"created_at\": \"2022-01-01T11:00:00-01:00\",\n    \"updated_at\": {\n        \"created_at\": \"2022-01-01T11:00:00-01:00\"\n    }\n}",
      "isBase64Encoded": false
    }

handler(postmanEv)
    .then( data => { log.info(`TEST ${data}`)})
    .catch(error => { log.info(`Error ${error}`) })
