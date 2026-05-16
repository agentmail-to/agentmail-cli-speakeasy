# APIKeyPermissions

Granular permissions for the API key. When ommitted all permissions are granted. Otherwise, only permissions set to true are granted.


## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `inbox_read`                     | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Read inbox details.              |
| `inbox_create`                   | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Create new inboxes.              |
| `inbox_update`                   | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Update inbox settings.           |
| `inbox_delete`                   | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Delete inboxes.                  |
| `thread_read`                    | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Read threads.                    |
| `thread_delete`                  | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Delete threads.                  |
| `message_read`                   | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Read messages.                   |
| `message_send`                   | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Send messages.                   |
| `message_update`                 | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Update message labels.           |
| `label_spam_read`                | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Access messages labeled spam.    |
| `label_blocked_read`             | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Access messages labeled blocked. |
| `label_trash_read`               | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Access messages labeled trash.   |
| `draft_read`                     | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Read drafts.                     |
| `draft_create`                   | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Create drafts.                   |
| `draft_update`                   | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Update drafts.                   |
| `draft_delete`                   | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Delete drafts.                   |
| `draft_send`                     | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Send drafts.                     |
| `webhook_read`                   | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Read webhook configurations.     |
| `webhook_create`                 | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Create webhooks.                 |
| `webhook_update`                 | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Update webhooks.                 |
| `webhook_delete`                 | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Delete webhooks.                 |
| `domain_read`                    | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Read domain details.             |
| `domain_create`                  | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Create domains.                  |
| `domain_update`                  | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Update domains.                  |
| `domain_delete`                  | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Delete domains.                  |
| `list_entry_read`                | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Read list entries.               |
| `list_entry_create`              | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Create list entries.             |
| `list_entry_delete`              | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Delete list entries.             |
| `metrics_read`                   | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Read metrics.                    |
| `api_key_read`                   | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Read API keys.                   |
| `api_key_create`                 | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Create API keys.                 |
| `api_key_delete`                 | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Delete API keys.                 |
| `pod_read`                       | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Read pods.                       |
| `pod_create`                     | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Create pods.                     |
| `pod_delete`                     | *OptionalNullable[bool]*         | :heavy_minus_sign:               | Delete pods.                     |