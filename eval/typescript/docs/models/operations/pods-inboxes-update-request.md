# PodsInboxesUpdateRequest

## Example Usage

```typescript
import { PodsInboxesUpdateRequest } from "agentmail/models/operations";

let value: PodsInboxesUpdateRequest = {
  podId: "<id>",
  inboxId: "<id>",
  body: {
    displayName: "Nayeli.Bruen15",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `podId`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `inboxId`                                                                                       | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `body`                                                                                          | [components.InboxesUpdateInboxRequest](../../models/components/inboxes-update-inbox-request.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |