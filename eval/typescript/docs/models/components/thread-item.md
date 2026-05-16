# ThreadItem

## Example Usage

```typescript
import { ThreadItem } from "agentmail/models/components";

let value: ThreadItem = {
  inboxId: "<id>",
  threadId: "<id>",
  labels: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  timestamp: new Date("2025-03-02T23:05:14.585Z"),
  senders: [],
  recipients: [],
  lastMessageId: "<id>",
  messageCount: 632745,
  size: 568835,
  updatedAt: new Date("2024-06-10T21:25:52.239Z"),
  createdAt: new Date("2024-09-02T03:59:56.882Z"),
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