# WebhooksCreateWebhookRequest

## Example Usage

```typescript
import { WebhooksCreateWebhookRequest } from "agentmail/models/components";

let value: WebhooksCreateWebhookRequest = {
  url: "https://tedious-merit.name/",
  eventTypes: [
    "message.received",
  ],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `url`                                                           | *string*                                                        | :heavy_check_mark:                                              | URL of webhook endpoint.                                        |
| `eventTypes`                                                    | [components.EventType](../../models/components/event-type.md)[] | :heavy_check_mark:                                              | Event types for which to send events.                           |
| `podIds`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Pods for which to send events. Maximum 10 per webhook.          |
| `inboxIds`                                                      | *string*[]                                                      | :heavy_minus_sign:                                              | Inboxes for which to send events. Maximum 10 per webhook.       |
| `clientId`                                                      | *string*                                                        | :heavy_minus_sign:                                              | Client ID of webhook.                                           |