# InboxesMessagesReplyAllRequest

## Example Usage

```typescript
import { InboxesMessagesReplyAllRequest } from "agentmail/models/operations";

let value: InboxesMessagesReplyAllRequest = {
  inboxId: "<id>",
  messageId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `inboxId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `messageId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `body`                                                                                    | [components.ReplyAllMessageRequest](../../models/components/reply-all-message-request.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |