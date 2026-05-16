# ListDraftsResponse

## Example Usage

```typescript
import { ListDraftsResponse } from "agentmail/models/components";

let value: ListDraftsResponse = {
  count: 512160,
  drafts: [],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `count`                                                         | *number*                                                        | :heavy_check_mark:                                              | Number of items returned.                                       |
| `limit`                                                         | *number*                                                        | :heavy_minus_sign:                                              | Limit of number of items returned.                              |
| `nextPageToken`                                                 | *string*                                                        | :heavy_minus_sign:                                              | Page token for pagination.                                      |
| `drafts`                                                        | [components.DraftItem](../../models/components/draft-item.md)[] | :heavy_check_mark:                                              | Ordered by `updated_at` descending.                             |