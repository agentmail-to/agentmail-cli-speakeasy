# DomainItem


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `pod_id`                                                             | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | ID of pod.                                                           |
| `domain_id`                                                          | *str*                                                                | :heavy_check_mark:                                                   | The ID of the domain.                                                |
| `domain`                                                             | *str*                                                                | :heavy_check_mark:                                                   | The name of the domain (e.g., `example.com`).                        |
| `feedback_enabled`                                                   | *bool*                                                               | :heavy_check_mark:                                                   | Bounce and complaint notifications are sent to your inboxes.         |
| `client_id`                                                          | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | Client ID of domain.                                                 |
| `updated_at`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Time at which the domain was last updated.                           |
| `created_at`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Time at which the domain was created.                                |