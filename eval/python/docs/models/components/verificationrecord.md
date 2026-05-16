# VerificationRecord


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | [components.RecordType](../../models/components/recordtype.md)     | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *str*                                                              | :heavy_check_mark:                                                 | The name or host of the record.                                    |
| `value`                                                            | *str*                                                              | :heavy_check_mark:                                                 | The value of the record.                                           |
| `status`                                                           | [components.RecordStatus](../../models/components/recordstatus.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `priority`                                                         | *OptionalNullable[int]*                                            | :heavy_minus_sign:                                                 | The priority of the MX record.                                     |