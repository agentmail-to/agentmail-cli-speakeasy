# UpdateThreadResponse

## Example Usage

```typescript
import { UpdateThreadResponse } from "agentmail/models/components";

let value: UpdateThreadResponse = {
  threadId: "<id>",
  labels: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `threadId`         | *string*           | :heavy_check_mark: | ID of thread.      |
| `labels`           | *string*[]         | :heavy_check_mark: | Labels of thread.  |