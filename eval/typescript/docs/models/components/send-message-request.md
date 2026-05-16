# SendMessageRequest

## Example Usage

```typescript
import { SendMessageRequest } from "agentmail/models/components";

let value: SendMessageRequest = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `labels`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | Labels of message.                                                        |
| `replyTo`                                                                 | *components.SendMessageReplyTo*                                           | :heavy_minus_sign:                                                        | N/A                                                                       |
| `to`                                                                      | *components.SendMessageTo*                                                | :heavy_minus_sign:                                                        | N/A                                                                       |
| `cc`                                                                      | *components.SendMessageCc*                                                | :heavy_minus_sign:                                                        | N/A                                                                       |
| `bcc`                                                                     | *components.SendMessageBcc*                                               | :heavy_minus_sign:                                                        | N/A                                                                       |
| `subject`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | Subject of message.                                                       |
| `text`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | Plain text body of message.                                               |
| `html`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | HTML body of message.                                                     |
| `attachments`                                                             | [components.SendAttachment](../../models/components/send-attachment.md)[] | :heavy_minus_sign:                                                        | Attachments to include in message.                                        |
| `headers`                                                                 | Record<string, *string*>                                                  | :heavy_minus_sign:                                                        | Headers to include in message.                                            |