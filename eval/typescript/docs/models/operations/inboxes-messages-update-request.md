# InboxesMessagesUpdateRequest

## Example Usage

```typescript
import { InboxesMessagesUpdateRequest } from "agentmail/models/operations";

let value: InboxesMessagesUpdateRequest = {
  inboxId: "<id>",
  messageId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `inboxId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `messageId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `body`                                                                               | [components.UpdateMessageRequest](../../models/components/update-message-request.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |