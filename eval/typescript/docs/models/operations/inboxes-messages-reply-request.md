# InboxesMessagesReplyRequest

## Example Usage

```typescript
import { InboxesMessagesReplyRequest } from "agentmail/models/operations";

let value: InboxesMessagesReplyRequest = {
  inboxId: "<id>",
  messageId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `inboxId`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `messageId`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `body`                                                                                  | [components.ReplyToMessageRequest](../../models/components/reply-to-message-request.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |