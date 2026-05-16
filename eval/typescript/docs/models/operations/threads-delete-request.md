# ThreadsDeleteRequest

## Example Usage

```typescript
import { ThreadsDeleteRequest } from "agentmail/models/operations";

let value: ThreadsDeleteRequest = {
  threadId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `threadId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `permanent`                                                        | *boolean*                                                          | :heavy_minus_sign:                                                 | If true, permanently delete the thread instead of moving to trash. |