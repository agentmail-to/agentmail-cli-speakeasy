# WebhooksUpdateWebhookRequest


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `add_inbox_ids`                                           | List[*str*]                                               | :heavy_minus_sign:                                        | Inboxes for which to send events. Maximum 10 per webhook. |
| `remove_inbox_ids`                                        | List[*str*]                                               | :heavy_minus_sign:                                        | Inboxes for which to send events. Maximum 10 per webhook. |
| `add_pod_ids`                                             | List[*str*]                                               | :heavy_minus_sign:                                        | Pods for which to send events. Maximum 10 per webhook.    |
| `remove_pod_ids`                                          | List[*str*]                                               | :heavy_minus_sign:                                        | Pods for which to send events. Maximum 10 per webhook.    |