# PodsThreadsDeleteRequest

## Example Usage

```typescript
import { PodsThreadsDeleteRequest } from "agentmail/models/operations";

let value: PodsThreadsDeleteRequest = {
  podId: "<id>",
  threadId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `podId`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `threadId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `permanent`                                                        | *boolean*                                                          | :heavy_minus_sign:                                                 | If true, permanently delete the thread instead of moving to trash. |