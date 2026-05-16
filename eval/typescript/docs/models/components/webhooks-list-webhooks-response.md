# WebhooksListWebhooksResponse

## Example Usage

```typescript
import { WebhooksListWebhooksResponse } from "agentmail/models/components";

let value: WebhooksListWebhooksResponse = {
  count: 510520,
  webhooks: [],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `count`                                                                     | *number*                                                                    | :heavy_check_mark:                                                          | Number of items returned.                                                   |
| `limit`                                                                     | *number*                                                                    | :heavy_minus_sign:                                                          | Limit of number of items returned.                                          |
| `nextPageToken`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | Page token for pagination.                                                  |
| `webhooks`                                                                  | [components.WebhooksWebhook](../../models/components/webhooks-webhook.md)[] | :heavy_check_mark:                                                          | Ordered by `created_at` descending.                                         |