# PodsPod


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `pod_id`                                                             | *str*                                                                | :heavy_check_mark:                                                   | ID of pod.                                                           |
| `name`                                                               | *str*                                                                | :heavy_check_mark:                                                   | Name of pod.                                                         |
| `updated_at`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Time at which pod was last updated.                                  |
| `created_at`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Time at which pod was created.                                       |
| `client_id`                                                          | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | Client ID of pod.                                                    |