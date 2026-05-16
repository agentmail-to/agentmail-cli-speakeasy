# ListListEntriesResponse

## Example Usage

```typescript
import { ListListEntriesResponse } from "agentmail/models/components";

let value: ListListEntriesResponse = {
  count: 625475,
  entries: [
    {
      entry: "<value>",
      organizationId: "<id>",
      direction: "send",
      listType: "block",
      entryType: "email",
      createdAt: new Date("2025-09-23T02:23:16.678Z"),
    },
  ],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `count`                                                         | *number*                                                        | :heavy_check_mark:                                              | Number of items returned.                                       |
| `limit`                                                         | *number*                                                        | :heavy_minus_sign:                                              | Limit of number of items returned.                              |
| `nextPageToken`                                                 | *string*                                                        | :heavy_minus_sign:                                              | Page token for pagination.                                      |
| `entries`                                                       | [components.ListEntry](../../models/components/list-entry.md)[] | :heavy_check_mark:                                              | Ordered by entry ascending.                                     |