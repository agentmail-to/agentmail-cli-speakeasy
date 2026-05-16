# PodsListsCreateRequest

## Example Usage

```typescript
import { PodsListsCreateRequest } from "agentmail/models/operations";

let value: PodsListsCreateRequest = {
  podId: "<id>",
  direction: "reply",
  type: "allow",
  body: {
    entry: "<value>",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `podId`                                                                                   | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `direction`                                                                               | [components.Direction](../../models/components/direction.md)                              | :heavy_check_mark:                                                                        | Direction of list entry.                                                                  |
| `type`                                                                                    | [components.ListType](../../models/components/list-type.md)                               | :heavy_check_mark:                                                                        | Type of list entry.                                                                       |
| `body`                                                                                    | [components.CreateListEntryRequest](../../models/components/create-list-entry-request.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |