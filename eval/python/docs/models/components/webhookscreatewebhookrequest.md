# WebhooksCreateWebhookRequest


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `url`                                                              | *str*                                                              | :heavy_check_mark:                                                 | URL of webhook endpoint.                                           |
| `event_types`                                                      | List[[components.EventType](../../models/components/eventtype.md)] | :heavy_check_mark:                                                 | Event types for which to send events.                              |
| `pod_ids`                                                          | List[*str*]                                                        | :heavy_minus_sign:                                                 | Pods for which to send events. Maximum 10 per webhook.             |
| `inbox_ids`                                                        | List[*str*]                                                        | :heavy_minus_sign:                                                 | Inboxes for which to send events. Maximum 10 per webhook.          |
| `client_id`                                                        | *Optional[str]*                                                    | :heavy_minus_sign:                                                 | Client ID of webhook.                                              |