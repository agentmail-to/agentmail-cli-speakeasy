# ListMessagesResponse

## Example Usage

```typescript
import { ListMessagesResponse } from "agentmail/models/components";

let value: ListMessagesResponse = {
  count: 781385,
  messages: [
    {
      inboxId: "<id>",
      threadId: "<id>",
      messageId: "<id>",
      labels: [
        "<value 1>",
      ],
      timestamp: new Date("2024-09-06T09:34:29.203Z"),
      from: "<value>",
      to: [
        "<value 1>",
      ],
      size: 151518,
      updatedAt: new Date("2024-11-02T23:47:09.494Z"),
      createdAt: new Date("2025-01-09T20:17:22.548Z"),
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `count`                                                             | *number*                                                            | :heavy_check_mark:                                                  | Number of items returned.                                           |
| `limit`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | Limit of number of items returned.                                  |
| `nextPageToken`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | Page token for pagination.                                          |
| `messages`                                                          | [components.MessageItem](../../models/components/message-item.md)[] | :heavy_check_mark:                                                  | Ordered by `timestamp` descending.                                  |