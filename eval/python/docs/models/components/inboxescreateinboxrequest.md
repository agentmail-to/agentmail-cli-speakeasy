# InboxesCreateInboxRequest


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `username`                                                              | *OptionalNullable[str]*                                                 | :heavy_minus_sign:                                                      | Username of address. Randomly generated if not specified.               |
| `domain`                                                                | *OptionalNullable[str]*                                                 | :heavy_minus_sign:                                                      | Domain of address. Must be verified domain. Defaults to `agentmail.to`. |
| `display_name`                                                          | *Optional[str]*                                                         | :heavy_minus_sign:                                                      | Display name: `Display Name <username@domain.com>`.                     |
| `client_id`                                                             | *Optional[str]*                                                         | :heavy_minus_sign:                                                      | Client ID of inbox.                                                     |