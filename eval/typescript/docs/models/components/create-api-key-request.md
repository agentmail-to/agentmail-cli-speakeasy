# CreateApiKeyRequest

## Example Usage

```typescript
import { CreateApiKeyRequest } from "agentmail/models/components";

let value: CreateApiKeyRequest = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Name of api key.                                                                                                                      |
| `permissions`                                                                                                                         | [components.ApiKeyPermissions](../../models/components/api-key-permissions.md)                                                        | :heavy_minus_sign:                                                                                                                    | Granular permissions for the API key. When ommitted all permissions are granted. Otherwise, only permissions set to true are granted. |