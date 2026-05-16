# ListEntry

## Example Usage

```typescript
import { ListEntry } from "agentmail/models/components";

let value: ListEntry = {
  entry: "<value>",
  organizationId: "<id>",
  direction: "send",
  listType: "block",
  entryType: "email",
  createdAt: new Date("2026-05-15T18:38:34.301Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `entry`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Email address or domain of list entry.                                                        |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of organization.                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Reason for adding the entry.                                                                  |
| `direction`                                                                                   | [components.Direction](../../models/components/direction.md)                                  | :heavy_check_mark:                                                                            | Direction of list entry.                                                                      |
| `listType`                                                                                    | [components.ListType](../../models/components/list-type.md)                                   | :heavy_check_mark:                                                                            | Type of list entry.                                                                           |
| `entryType`                                                                                   | [components.EntryType](../../models/components/entry-type.md)                                 | :heavy_check_mark:                                                                            | Whether the entry is an email address or domain.                                              |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which entry was created.                                                              |