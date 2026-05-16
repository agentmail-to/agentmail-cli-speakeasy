# WebhooksWebhook

## Example Usage

```typescript
import { WebhooksWebhook } from "agentmail/models/components";

let value: WebhooksWebhook = {
  webhookId: "<id>",
  url: "https://tender-scorn.com",
  secret: "<value>",
  enabled: false,
  updatedAt: new Date("2025-09-23T16:06:43.125Z"),
  createdAt: new Date("2025-07-02T17:07:24.434Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `webhookId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of webhook.                                                                                |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | URL of webhook endpoint.                                                                      |
| `eventTypes`                                                                                  | [components.EventType](../../models/components/event-type.md)[]                               | :heavy_minus_sign:                                                                            | Event types for which to send events.                                                         |
| `podIds`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Pods for which to send events. Maximum 10 per webhook.                                        |
| `inboxIds`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Inboxes for which to send events. Maximum 10 per webhook.                                     |
| `secret`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Secret for webhook signature verification.                                                    |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Webhook is enabled.                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which webhook was last updated.                                                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which webhook was created.                                                            |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Client ID of webhook.                                                                         |