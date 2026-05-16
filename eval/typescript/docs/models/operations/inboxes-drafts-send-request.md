# InboxesDraftsSendRequest

## Example Usage

```typescript
import { InboxesDraftsSendRequest } from "agentmail/models/operations";

let value: InboxesDraftsSendRequest = {
  inboxId: "<id>",
  draftId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `inboxId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `draftId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `body`                                                                               | [components.UpdateMessageRequest](../../models/components/update-message-request.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |