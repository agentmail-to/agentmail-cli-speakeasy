# AgentSignupResponse

Response after successful agent sign-up.

## Example Usage

```typescript
import { AgentSignupResponse } from "agentmail/models/components";

let value: AgentSignupResponse = {
  organizationId: "<id>",
  inboxId: "<id>",
  apiKey: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of the created organization.                                                                    |
| `inboxId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of the auto-created inbox.                                                                      |
| `apiKey`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | API key for authenticating subsequent requests. Store this securely, it cannot be retrieved again. |