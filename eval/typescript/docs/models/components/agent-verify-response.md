# AgentVerifyResponse

Response after successful agent verification.

## Example Usage

```typescript
import { AgentVerifyResponse } from "agentmail/models/components";

let value: AgentVerifyResponse = {
  verified: true,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `verified`                             | *boolean*                              | :heavy_check_mark:                     | Whether the organization was verified. |