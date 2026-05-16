# WebhooksUpdateWebhookRequest

## Example Usage

```typescript
import { WebhooksUpdateWebhookRequest } from "agentmail/models/components";

let value: WebhooksUpdateWebhookRequest = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `addInboxIds`                                             | *string*[]                                                | :heavy_minus_sign:                                        | Inboxes for which to send events. Maximum 10 per webhook. |
| `removeInboxIds`                                          | *string*[]                                                | :heavy_minus_sign:                                        | Inboxes for which to send events. Maximum 10 per webhook. |
| `addPodIds`                                               | *string*[]                                                | :heavy_minus_sign:                                        | Pods for which to send events. Maximum 10 per webhook.    |
| `removePodIds`                                            | *string*[]                                                | :heavy_minus_sign:                                        | Pods for which to send events. Maximum 10 per webhook.    |