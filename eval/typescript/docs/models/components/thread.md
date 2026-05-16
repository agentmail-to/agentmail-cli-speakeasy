# Thread

## Example Usage

```typescript
import { Thread } from "agentmail/models/components";

let value: Thread = {
  inboxId: "<id>",
  threadId: "<id>",
  labels: [
    "<value 1>",
    "<value 2>",
  ],
  timestamp: new Date("2025-12-01T11:20:37.745Z"),
  senders: [
    "<value 1>",
  ],
  recipients: [
    "<value 1>",
  ],
  lastMessageId: "<id>",
  messageCount: 565341,
  size: 537005,
  updatedAt: new Date("2024-12-13T21:02:59.315Z"),
  createdAt: new Date("2025-11-11T23:33:02.446Z"),
  messages: [
    {
      inboxId: "<id>",
      threadId: "<id>",
      messageId: "<id>",
      labels: [
        "<value 1>",
        "<value 2>",
      ],
      timestamp: new Date("2024-06-06T05:13:02.419Z"),
      from: "<value>",
      to: [
        "<value 1>",
        "<value 2>",
      ],
      size: 520773,
      updatedAt: new Date("2026-09-10T16:14:32.699Z"),
      createdAt: new Date("2024-01-01T00:46:51.895Z"),
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `inboxId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the inbox.                                                                           |
| `threadId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of thread.                                                                                  |
| `labels`                                                                                       | *string*[]                                                                                     | :heavy_check_mark:                                                                             | Labels of thread.                                                                              |
| `timestamp`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Timestamp of last sent or received message.                                                    |
| `receivedTimestamp`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | Timestamp of last received message.                                                            |
| `sentTimestamp`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | Timestamp of last sent message.                                                                |
| `senders`                                                                                      | *string*[]                                                                                     | :heavy_check_mark:                                                                             | Senders in thread. In format `username@domain.com` or `Display Name <username@domain.com>`.    |
| `recipients`                                                                                   | *string*[]                                                                                     | :heavy_check_mark:                                                                             | Recipients in thread. In format `username@domain.com` or `Display Name <username@domain.com>`. |
| `subject`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | Subject of thread.                                                                             |
| `preview`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | Text preview of last message in thread.                                                        |
| `attachments`                                                                                  | [components.Attachment](../../models/components/attachment.md)[]                               | :heavy_minus_sign:                                                                             | Attachments in thread.                                                                         |
| `lastMessageId`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of last message in thread.                                                                  |
| `messageCount`                                                                                 | *number*                                                                                       | :heavy_check_mark:                                                                             | Number of messages in thread.                                                                  |
| `size`                                                                                         | *number*                                                                                       | :heavy_check_mark:                                                                             | Size of thread in bytes.                                                                       |
| `updatedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Time at which thread was last updated.                                                         |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Time at which thread was created.                                                              |
| `messages`                                                                                     | [components.Message](../../models/components/message.md)[]                                     | :heavy_check_mark:                                                                             | Messages in thread. Ordered by `timestamp` ascending.                                          |