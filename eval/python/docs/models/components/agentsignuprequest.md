# AgentSignupRequest

Request body to sign up an agent.


## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `human_email`                                                                              | *str*                                                                                      | :heavy_check_mark:                                                                         | Email address of the human who owns the agent. A 6-digit OTP will be sent to this address. |
| `username`                                                                                 | *str*                                                                                      | :heavy_check_mark:                                                                         | Username for the auto-created inbox (e.g. "my-agent" creates my-agent@agentmail.to).       |