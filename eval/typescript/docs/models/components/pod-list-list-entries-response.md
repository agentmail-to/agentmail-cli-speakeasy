# PodListListEntriesResponse

## Example Usage

```typescript
import { PodListListEntriesResponse } from "agentmail/models/components";

let value: PodListListEntriesResponse = {
  count: 976065,
  entries: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `count`                                                                | *number*                                                               | :heavy_check_mark:                                                     | Number of items returned.                                              |
| `limit`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | Limit of number of items returned.                                     |
| `nextPageToken`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | Page token for pagination.                                             |
| `entries`                                                              | [components.PodListEntry](../../models/components/pod-list-entry.md)[] | :heavy_check_mark:                                                     | Ordered by entry ascending.                                            |