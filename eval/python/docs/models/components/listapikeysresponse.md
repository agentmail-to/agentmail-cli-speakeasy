# ListAPIKeysResponse


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `count`                                                      | *int*                                                        | :heavy_check_mark:                                           | Number of items returned.                                    |
| `next_page_token`                                            | *Optional[str]*                                              | :heavy_minus_sign:                                           | Page token for pagination.                                   |
| `api_keys`                                                   | List[[components.APIKey](../../models/components/apikey.md)] | :heavy_check_mark:                                           | Ordered by `created_at` descending.                          |