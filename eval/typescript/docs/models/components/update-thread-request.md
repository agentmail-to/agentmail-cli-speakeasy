# UpdateThreadRequest

## Example Usage

```typescript
import { UpdateThreadRequest } from "agentmail/models/components";

let value: UpdateThreadRequest = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `addLabels`                                                                                                                           | *string*[]                                                                                                                            | :heavy_minus_sign:                                                                                                                    | Labels to add to thread. Cannot be system labels.                                                                                     |
| `removeLabels`                                                                                                                        | *string*[]                                                                                                                            | :heavy_minus_sign:                                                                                                                    | Labels to remove from thread. Cannot be system labels. Takes priority over `add_labels` (in the event of duplicate labels passed in). |