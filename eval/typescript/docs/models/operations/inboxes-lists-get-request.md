# InboxesListsGetRequest

## Example Usage

```typescript
import { InboxesListsGetRequest } from "agentmail/models/operations";

let value: InboxesListsGetRequest = {
  inboxId: "<id>",
  direction: "reply",
  type: "allow",
  entry: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `inboxId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `direction`                                                  | [components.Direction](../../models/components/direction.md) | :heavy_check_mark:                                           | Direction of list entry.                                     |
| `type`                                                       | [components.ListType](../../models/components/list-type.md)  | :heavy_check_mark:                                           | Type of list entry.                                          |
| `entry`                                                      | *string*                                                     | :heavy_check_mark:                                           | Email address or domain.                                     |