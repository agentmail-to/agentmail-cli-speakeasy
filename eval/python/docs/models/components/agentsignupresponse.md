# AgentSignupResponse

Response after successful agent sign-up.


## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `organization_id`                                                                                  | *str*                                                                                              | :heavy_check_mark:                                                                                 | ID of the created organization.                                                                    |
| `inbox_id`                                                                                         | *str*                                                                                              | :heavy_check_mark:                                                                                 | ID of the auto-created inbox.                                                                      |
| `api_key`                                                                                          | *str*                                                                                              | :heavy_check_mark:                                                                                 | API key for authenticating subsequent requests. Store this securely, it cannot be retrieved again. |