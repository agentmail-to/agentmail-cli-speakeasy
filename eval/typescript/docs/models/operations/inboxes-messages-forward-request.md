# InboxesMessagesForwardRequest

## Example Usage

```typescript
import { InboxesMessagesForwardRequest } from "agentmail/models/operations";

let value: InboxesMessagesForwardRequest = {
  inboxId: "<id>",
  messageId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `inboxId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `messageId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `body`                                                                           | [components.SendMessageRequest](../../models/components/send-message-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |