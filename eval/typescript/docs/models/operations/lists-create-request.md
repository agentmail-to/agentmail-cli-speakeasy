# ListsCreateRequest

## Example Usage

```typescript
import { ListsCreateRequest } from "agentmail/models/operations";

let value: ListsCreateRequest = {
  direction: "send",
  type: "block",
  body: {
    entry: "<value>",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `direction`                                                                               | [components.Direction](../../models/components/direction.md)                              | :heavy_check_mark:                                                                        | Direction of list entry.                                                                  |
| `type`                                                                                    | [components.ListType](../../models/components/list-type.md)                               | :heavy_check_mark:                                                                        | Type of list entry.                                                                       |
| `body`                                                                                    | [components.CreateListEntryRequest](../../models/components/create-list-entry-request.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |