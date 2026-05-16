# PodsThreadsUpdateRequest

## Example Usage

```typescript
import { PodsThreadsUpdateRequest } from "agentmail/models/operations";

let value: PodsThreadsUpdateRequest = {
  podId: "<id>",
  threadId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `podId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `threadId`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `body`                                                                             | [components.UpdateThreadRequest](../../models/components/update-thread-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |