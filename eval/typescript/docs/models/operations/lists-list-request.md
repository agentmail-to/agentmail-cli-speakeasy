# ListsListRequest

## Example Usage

```typescript
import { ListsListRequest } from "agentmail/models/operations";

let value: ListsListRequest = {
  direction: "receive",
  type: "allow",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `direction`                                                  | [components.Direction](../../models/components/direction.md) | :heavy_check_mark:                                           | Direction of list entry.                                     |
| `type`                                                       | [components.ListType](../../models/components/list-type.md)  | :heavy_check_mark:                                           | Type of list entry.                                          |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `pageToken`                                                  | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |