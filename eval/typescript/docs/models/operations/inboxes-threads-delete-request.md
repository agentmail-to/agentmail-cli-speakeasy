# InboxesThreadsDeleteRequest

## Example Usage

```typescript
import { InboxesThreadsDeleteRequest } from "agentmail/models/operations";

let value: InboxesThreadsDeleteRequest = {
  inboxId: "<id>",
  threadId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `inboxId`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `threadId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `permanent`                                                        | *boolean*                                                          | :heavy_minus_sign:                                                 | If true, permanently delete the thread instead of moving to trash. |