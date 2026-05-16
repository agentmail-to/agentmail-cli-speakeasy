# ListsDeleteRequest

## Example Usage

```typescript
import { ListsDeleteRequest } from "agentmail/models/operations";

let value: ListsDeleteRequest = {
  direction: "reply",
  type: "block",
  entry: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `direction`                                                  | [components.Direction](../../models/components/direction.md) | :heavy_check_mark:                                           | Direction of list entry.                                     |
| `type`                                                       | [components.ListType](../../models/components/list-type.md)  | :heavy_check_mark:                                           | Type of list entry.                                          |
| `entry`                                                      | *string*                                                     | :heavy_check_mark:                                           | Email address or domain.                                     |