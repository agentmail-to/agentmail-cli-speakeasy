# InboxesListsListRequest

## Example Usage

```typescript
import { InboxesListsListRequest } from "agentmail/models/operations";

let value: InboxesListsListRequest = {
  inboxId: "<id>",
  direction: "send",
  type: "block",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `inboxId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `direction`                                                  | [components.Direction](../../models/components/direction.md) | :heavy_check_mark:                                           | Direction of list entry.                                     |
| `type`                                                       | [components.ListType](../../models/components/list-type.md)  | :heavy_check_mark:                                           | Type of list entry.                                          |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `pageToken`                                                  | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |