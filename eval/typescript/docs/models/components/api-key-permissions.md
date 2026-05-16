# ApiKeyPermissions

Granular permissions for the API key. When ommitted all permissions are granted. Otherwise, only permissions set to true are granted.

## Example Usage

```typescript
import { ApiKeyPermissions } from "agentmail/models/components";

let value: ApiKeyPermissions = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `inboxRead`                      | *boolean*                        | :heavy_minus_sign:               | Read inbox details.              |
| `inboxCreate`                    | *boolean*                        | :heavy_minus_sign:               | Create new inboxes.              |
| `inboxUpdate`                    | *boolean*                        | :heavy_minus_sign:               | Update inbox settings.           |
| `inboxDelete`                    | *boolean*                        | :heavy_minus_sign:               | Delete inboxes.                  |
| `threadRead`                     | *boolean*                        | :heavy_minus_sign:               | Read threads.                    |
| `threadDelete`                   | *boolean*                        | :heavy_minus_sign:               | Delete threads.                  |
| `messageRead`                    | *boolean*                        | :heavy_minus_sign:               | Read messages.                   |
| `messageSend`                    | *boolean*                        | :heavy_minus_sign:               | Send messages.                   |
| `messageUpdate`                  | *boolean*                        | :heavy_minus_sign:               | Update message labels.           |
| `labelSpamRead`                  | *boolean*                        | :heavy_minus_sign:               | Access messages labeled spam.    |
| `labelBlockedRead`               | *boolean*                        | :heavy_minus_sign:               | Access messages labeled blocked. |
| `labelTrashRead`                 | *boolean*                        | :heavy_minus_sign:               | Access messages labeled trash.   |
| `draftRead`                      | *boolean*                        | :heavy_minus_sign:               | Read drafts.                     |
| `draftCreate`                    | *boolean*                        | :heavy_minus_sign:               | Create drafts.                   |
| `draftUpdate`                    | *boolean*                        | :heavy_minus_sign:               | Update drafts.                   |
| `draftDelete`                    | *boolean*                        | :heavy_minus_sign:               | Delete drafts.                   |
| `draftSend`                      | *boolean*                        | :heavy_minus_sign:               | Send drafts.                     |
| `webhookRead`                    | *boolean*                        | :heavy_minus_sign:               | Read webhook configurations.     |
| `webhookCreate`                  | *boolean*                        | :heavy_minus_sign:               | Create webhooks.                 |
| `webhookUpdate`                  | *boolean*                        | :heavy_minus_sign:               | Update webhooks.                 |
| `webhookDelete`                  | *boolean*                        | :heavy_minus_sign:               | Delete webhooks.                 |
| `domainRead`                     | *boolean*                        | :heavy_minus_sign:               | Read domain details.             |
| `domainCreate`                   | *boolean*                        | :heavy_minus_sign:               | Create domains.                  |
| `domainUpdate`                   | *boolean*                        | :heavy_minus_sign:               | Update domains.                  |
| `domainDelete`                   | *boolean*                        | :heavy_minus_sign:               | Delete domains.                  |
| `listEntryRead`                  | *boolean*                        | :heavy_minus_sign:               | Read list entries.               |
| `listEntryCreate`                | *boolean*                        | :heavy_minus_sign:               | Create list entries.             |
| `listEntryDelete`                | *boolean*                        | :heavy_minus_sign:               | Delete list entries.             |
| `metricsRead`                    | *boolean*                        | :heavy_minus_sign:               | Read metrics.                    |
| `apiKeyRead`                     | *boolean*                        | :heavy_minus_sign:               | Read API keys.                   |
| `apiKeyCreate`                   | *boolean*                        | :heavy_minus_sign:               | Create API keys.                 |
| `apiKeyDelete`                   | *boolean*                        | :heavy_minus_sign:               | Delete API keys.                 |
| `podRead`                        | *boolean*                        | :heavy_minus_sign:               | Read pods.                       |
| `podCreate`                      | *boolean*                        | :heavy_minus_sign:               | Create pods.                     |
| `podDelete`                      | *boolean*                        | :heavy_minus_sign:               | Delete pods.                     |