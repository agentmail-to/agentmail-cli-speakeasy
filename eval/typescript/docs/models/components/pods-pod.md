# PodsPod

## Example Usage

```typescript
import { PodsPod } from "agentmail/models/components";

let value: PodsPod = {
  podId: "<id>",
  name: "<value>",
  updatedAt: new Date("2026-09-16T03:15:59.386Z"),
  createdAt: new Date("2026-08-19T22:09:49.194Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `podId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of pod.                                                                                    |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of pod.                                                                                  |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which pod was last updated.                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which pod was created.                                                                |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Client ID of pod.                                                                             |