# ListDomainsResponse

## Example Usage

```typescript
import { ListDomainsResponse } from "agentmail/models/components";

let value: ListDomainsResponse = {
  count: 5022,
  domains: [],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `count`                                                           | *number*                                                          | :heavy_check_mark:                                                | Number of items returned.                                         |
| `limit`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Limit of number of items returned.                                |
| `nextPageToken`                                                   | *string*                                                          | :heavy_minus_sign:                                                | Page token for pagination.                                        |
| `domains`                                                         | [components.DomainItem](../../models/components/domain-item.md)[] | :heavy_check_mark:                                                | Ordered by `created_at` descending.                               |