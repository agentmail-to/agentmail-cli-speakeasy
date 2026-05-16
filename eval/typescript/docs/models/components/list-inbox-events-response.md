# ListInboxEventsResponse

## Example Usage

```typescript
import { ListInboxEventsResponse } from "agentmail/models/components";

let value: ListInboxEventsResponse = {
  count: 644572,
  events: [],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `count`                                                           | *number*                                                          | :heavy_check_mark:                                                | Number of items returned.                                         |
| `limit`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Limit of number of items returned.                                |
| `nextPageToken`                                                   | *string*                                                          | :heavy_minus_sign:                                                | Page token for pagination.                                        |
| `events`                                                          | [components.InboxEvent](../../models/components/inbox-event.md)[] | :heavy_check_mark:                                                | Ordered by `event_id` descending.                                 |