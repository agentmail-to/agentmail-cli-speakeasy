# InboxesThreadsDeleteRequest


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `inbox_id`                                                         | *str*                                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `thread_id`                                                        | *str*                                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `permanent`                                                        | *OptionalNullable[bool]*                                           | :heavy_minus_sign:                                                 | If true, permanently delete the thread instead of moving to trash. |