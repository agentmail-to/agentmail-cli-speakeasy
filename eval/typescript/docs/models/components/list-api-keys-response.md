# ListApiKeysResponse

## Example Usage

```typescript
import { ListApiKeysResponse } from "agentmail/models/components";

let value: ListApiKeysResponse = {
  count: 93302,
  apiKeys: [
    {
      apiKeyId: "<id>",
      prefix: "<value>",
      name: "<value>",
      createdAt: new Date("2026-11-19T15:22:08.332Z"),
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `count`                                                   | *number*                                                  | :heavy_check_mark:                                        | Number of items returned.                                 |
| `nextPageToken`                                           | *string*                                                  | :heavy_minus_sign:                                        | Page token for pagination.                                |
| `apiKeys`                                                 | [components.ApiKey](../../models/components/api-key.md)[] | :heavy_check_mark:                                        | Ordered by `created_at` descending.                       |