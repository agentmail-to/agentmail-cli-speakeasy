# AgentSignupRequest

Request body to sign up an agent.

## Example Usage

```typescript
import { AgentSignupRequest } from "agentmail/models/components";

let value: AgentSignupRequest = {
  humanEmail: "<value>",
  username: "Reva_Ritchie94",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `humanEmail`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | Email address of the human who owns the agent. A 6-digit OTP will be sent to this address. |
| `username`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | Username for the auto-created inbox (e.g. "my-agent" creates my-agent@agentmail.to).       |