# ListEntry


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `entry`                                                              | *str*                                                                | :heavy_check_mark:                                                   | Email address or domain of list entry.                               |
| `organization_id`                                                    | *str*                                                                | :heavy_check_mark:                                                   | ID of organization.                                                  |
| `reason`                                                             | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Reason for adding the entry.                                         |
| `direction`                                                          | [components.Direction](../../models/components/direction.md)         | :heavy_check_mark:                                                   | Direction of list entry.                                             |
| `list_type`                                                          | [components.ListType](../../models/components/listtype.md)           | :heavy_check_mark:                                                   | Type of list entry.                                                  |
| `entry_type`                                                         | [components.EntryType](../../models/components/entrytype.md)         | :heavy_check_mark:                                                   | Whether the entry is an email address or domain.                     |
| `created_at`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Time at which entry was created.                                     |