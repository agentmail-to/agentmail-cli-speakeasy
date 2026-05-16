# PodsListsGetRequest

## Example Usage

```typescript
import { PodsListsGetRequest } from "agentmail/models/operations";

let value: PodsListsGetRequest = {
  podId: "<id>",
  direction: "reply",
  type: "block",
  entry: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `podId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `direction`                                                  | [components.Direction](../../models/components/direction.md) | :heavy_check_mark:                                           | Direction of list entry.                                     |
| `type`                                                       | [components.ListType](../../models/components/list-type.md)  | :heavy_check_mark:                                           | Type of list entry.                                          |
| `entry`                                                      | *string*                                                     | :heavy_check_mark:                                           | Email address or domain.                                     |