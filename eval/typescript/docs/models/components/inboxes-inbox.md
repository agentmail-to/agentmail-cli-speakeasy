# InboxesInbox

## Example Usage

```typescript
import { InboxesInbox } from "agentmail/models/components";

let value: InboxesInbox = {
  podId: "<id>",
  inboxId: "<id>",
  email: "Hertha7@yahoo.com",
  updatedAt: new Date("2026-03-04T11:42:34.723Z"),
  createdAt: new Date("2024-11-09T17:51:12.776Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `podId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of pod.                                                                                    |
| `inboxId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the inbox.                                                                          |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Email address of the inbox.                                                                   |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Display name: `Display Name <username@domain.com>`.                                           |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Client ID of inbox.                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which inbox was last updated.                                                         |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which inbox was created.                                                              |