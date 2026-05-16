# InboxesThreadsUpdateRequest

## Example Usage

```typescript
import { InboxesThreadsUpdateRequest } from "agentmail/models/operations";

let value: InboxesThreadsUpdateRequest = {
  inboxId: "<id>",
  threadId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `inboxId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `threadId`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `body`                                                                             | [components.UpdateThreadRequest](../../models/components/update-thread-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |