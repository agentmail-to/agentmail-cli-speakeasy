# VerificationRecord

## Example Usage

```typescript
import { VerificationRecord } from "agentmail/models/components";

let value: VerificationRecord = {
  type: "MX",
  name: "<value>",
  value: "<value>",
  status: "VALID",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `type`                                                              | [components.RecordType](../../models/components/record-type.md)     | :heavy_check_mark:                                                  | N/A                                                                 |
| `name`                                                              | *string*                                                            | :heavy_check_mark:                                                  | The name or host of the record.                                     |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | The value of the record.                                            |
| `status`                                                            | [components.RecordStatus](../../models/components/record-status.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `priority`                                                          | *number*                                                            | :heavy_minus_sign:                                                  | The priority of the MX record.                                      |