# InboxesCreateInboxRequest

## Example Usage

```typescript
import { InboxesCreateInboxRequest } from "agentmail/models/components";

let value: InboxesCreateInboxRequest = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `username`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | Username of address. Randomly generated if not specified.               |
| `domain`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | Domain of address. Must be verified domain. Defaults to `agentmail.to`. |
| `displayName`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Display name: `Display Name <username@domain.com>`.                     |
| `clientId`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | Client ID of inbox.                                                     |