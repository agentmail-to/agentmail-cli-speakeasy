# PodsListPodsResponse


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `count`                                                        | *int*                                                          | :heavy_check_mark:                                             | Number of items returned.                                      |
| `limit`                                                        | *Optional[int]*                                                | :heavy_minus_sign:                                             | Limit of number of items returned.                             |
| `next_page_token`                                              | *Optional[str]*                                                | :heavy_minus_sign:                                             | Page token for pagination.                                     |
| `pods`                                                         | List[[components.PodsPod](../../models/components/podspod.md)] | :heavy_check_mark:                                             | Ordered by `created_at` descending.                            |