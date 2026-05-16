# CreateListEntryRequest

## Example Usage

```typescript
import { CreateListEntryRequest } from "agentmail/models/components";

let value: CreateListEntryRequest = {
  entry: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `entry`                         | *string*                        | :heavy_check_mark:              | Email address or domain to add. |
| `reason`                        | *string*                        | :heavy_minus_sign:              | Reason for adding the entry.    |