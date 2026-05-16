# InboxesDraftsUpdateRequest

## Example Usage

```typescript
import { InboxesDraftsUpdateRequest } from "agentmail/models/operations";

let value: InboxesDraftsUpdateRequest = {
  inboxId: "<id>",
  draftId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `inboxId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `draftId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `body`                                                                           | [components.UpdateDraftRequest](../../models/components/update-draft-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |