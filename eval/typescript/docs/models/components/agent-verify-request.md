# AgentVerifyRequest

Request body to verify an agent with an OTP code.

## Example Usage

```typescript
import { AgentVerifyRequest } from "agentmail/models/components";

let value: AgentVerifyRequest = {
  otpCode: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `otpCode`                                                    | *string*                                                     | :heavy_check_mark:                                           | 6-digit verification code sent to the human's email address. |