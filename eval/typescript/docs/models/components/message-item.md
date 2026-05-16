# MessageItem

## Example Usage

```typescript
import { MessageItem } from "agentmail/models/components";

let value: MessageItem = {
  inboxId: "<id>",
  threadId: "<id>",
  messageId: "<id>",
  labels: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  timestamp: new Date("2024-08-09T23:25:46.916Z"),
  from: "<value>",
  to: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  size: 17532,
  updatedAt: new Date("2024-05-27T01:22:43.591Z"),
  createdAt: new Date("2025-12-09T13:40:13.820Z"),
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `inboxId`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | The ID of the inbox.                                                                                  |
| `threadId`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | ID of thread.                                                                                         |
| `messageId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | ID of message.                                                                                        |
| `labels`                                                                                              | *string*[]                                                                                            | :heavy_check_mark:                                                                                    | Labels of message.                                                                                    |
| `timestamp`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | Time at which message was sent or drafted.                                                            |
| `from`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | Address of sender. In format `username@domain.com` or `Display Name <username@domain.com>`.           |
| `to`                                                                                                  | *string*[]                                                                                            | :heavy_check_mark:                                                                                    | Addresses of recipients. In format `username@domain.com` or `Display Name <username@domain.com>`.     |
| `cc`                                                                                                  | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | Addresses of CC recipients. In format `username@domain.com` or `Display Name <username@domain.com>`.  |
| `bcc`                                                                                                 | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | Addresses of BCC recipients. In format `username@domain.com` or `Display Name <username@domain.com>`. |
| `subject`                                                                                             | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Subject of message.                                                                                   |
| `preview`                                                                                             | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Text preview of message.                                                                              |
| `attachments`                                                                                         | [components.Attachment](../../models/components/attachment.md)[]                                      | :heavy_minus_sign:                                                                                    | Attachments in message.                                                                               |
| `inReplyTo`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | ID of message being replied to.                                                                       |
| `references`                                                                                          | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | IDs of previous messages in thread.                                                                   |
| `headers`                                                                                             | Record<string, *string*>                                                                              | :heavy_minus_sign:                                                                                    | Headers in message.                                                                                   |
| `size`                                                                                                | *number*                                                                                              | :heavy_check_mark:                                                                                    | Size of message in bytes.                                                                             |
| `updatedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | Time at which message was last updated.                                                               |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | Time at which message was created.                                                                    |