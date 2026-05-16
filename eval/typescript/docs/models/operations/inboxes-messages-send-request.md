# InboxesMessagesSendRequest

## Example Usage

```typescript
import { InboxesMessagesSendRequest } from "agentmail/models/operations";

let value: InboxesMessagesSendRequest = {
  inboxId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `inboxId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `body`                                                                           | [components.SendMessageRequest](../../models/components/send-message-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |