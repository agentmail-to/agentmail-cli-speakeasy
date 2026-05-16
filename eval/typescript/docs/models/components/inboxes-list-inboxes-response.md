# InboxesListInboxesResponse

## Example Usage

```typescript
import { InboxesListInboxesResponse } from "agentmail/models/components";

let value: InboxesListInboxesResponse = {
  count: 62071,
  inboxes: [],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `count`                                                               | *number*                                                              | :heavy_check_mark:                                                    | Number of items returned.                                             |
| `limit`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | Limit of number of items returned.                                    |
| `nextPageToken`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | Page token for pagination.                                            |
| `inboxes`                                                             | [components.InboxesInbox](../../models/components/inboxes-inbox.md)[] | :heavy_check_mark:                                                    | Ordered by `created_at` descending.                                   |