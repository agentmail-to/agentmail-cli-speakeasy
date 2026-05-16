# DomainItem

## Example Usage

```typescript
import { DomainItem } from "agentmail/models/components";

let value: DomainItem = {
  domainId: "<id>",
  domain: "fine-moment.com",
  feedbackEnabled: false,
  updatedAt: new Date("2026-03-24T08:41:40.847Z"),
  createdAt: new Date("2026-03-18T00:28:22.860Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `podId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | ID of pod.                                                                                    |
| `domainId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the domain.                                                                         |
| `domain`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the domain (e.g., `example.com`).                                                 |
| `feedbackEnabled`                                                                             | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Bounce and complaint notifications are sent to your inboxes.                                  |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Client ID of domain.                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which the domain was last updated.                                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which the domain was created.                                                         |