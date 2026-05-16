# PodsListPodsResponse

## Example Usage

```typescript
import { PodsListPodsResponse } from "agentmail/models/components";

let value: PodsListPodsResponse = {
  count: 914196,
  pods: [],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `count`                                                     | *number*                                                    | :heavy_check_mark:                                          | Number of items returned.                                   |
| `limit`                                                     | *number*                                                    | :heavy_minus_sign:                                          | Limit of number of items returned.                          |
| `nextPageToken`                                             | *string*                                                    | :heavy_minus_sign:                                          | Page token for pagination.                                  |
| `pods`                                                      | [components.PodsPod](../../models/components/pods-pod.md)[] | :heavy_check_mark:                                          | Ordered by `created_at` descending.                         |