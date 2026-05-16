# ListThreadsResponse

## Example Usage

```typescript
import { ListThreadsResponse } from "agentmail/models/components";

let value: ListThreadsResponse = {
  count: 283778,
  threads: [
    {
      inboxId: "<id>",
      threadId: "<id>",
      labels: [
        "<value 1>",
        "<value 2>",
      ],
      timestamp: new Date("2025-07-09T03:22:01.603Z"),
      senders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      recipients: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      lastMessageId: "<id>",
      messageCount: 706567,
      size: 671602,
      updatedAt: new Date("2025-06-24T04:06:21.359Z"),
      createdAt: new Date("2024-10-30T09:09:49.640Z"),
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `count`                                                           | *number*                                                          | :heavy_check_mark:                                                | Number of items returned.                                         |
| `limit`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Limit of number of items returned.                                |
| `nextPageToken`                                                   | *string*                                                          | :heavy_minus_sign:                                                | Page token for pagination.                                        |
| `threads`                                                         | [components.ThreadItem](../../models/components/thread-item.md)[] | :heavy_check_mark:                                                | Ordered by `timestamp` descending.                                |