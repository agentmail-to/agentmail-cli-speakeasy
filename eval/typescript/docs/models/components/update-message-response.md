# UpdateMessageResponse

## Example Usage

```typescript
import { UpdateMessageResponse } from "agentmail/models/components";

let value: UpdateMessageResponse = {
  messageId: "<id>",
  labels: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `messageId`        | *string*           | :heavy_check_mark: | ID of message.     |
| `labels`           | *string*[]         | :heavy_check_mark: | Labels of message. |