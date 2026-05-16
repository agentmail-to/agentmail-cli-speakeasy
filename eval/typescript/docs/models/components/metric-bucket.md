# MetricBucket

## Example Usage

```typescript
import { MetricBucket } from "agentmail/models/components";

let value: MetricBucket = {
  timestamp: new Date("2024-09-13T02:48:51.530Z"),
  count: 824908,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the bucket.                                                                      |
| `count`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Count of events in the bucket.                                                                |