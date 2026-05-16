# InboxesListsGetRequest


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `inbox_id`                                                   | *str*                                                        | :heavy_check_mark:                                           | N/A                                                          |
| `direction`                                                  | [components.Direction](../../models/components/direction.md) | :heavy_check_mark:                                           | Direction of list entry.                                     |
| `type`                                                       | [components.ListType](../../models/components/listtype.md)   | :heavy_check_mark:                                           | Type of list entry.                                          |
| `entry`                                                      | *str*                                                        | :heavy_check_mark:                                           | Email address or domain.                                     |