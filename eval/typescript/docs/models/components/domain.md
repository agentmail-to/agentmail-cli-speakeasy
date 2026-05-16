# Domain

## Example Usage

```typescript
import { Domain } from "agentmail/models/components";

let value: Domain = {
  domainId: "<id>",
  domain: "yellow-hovel.info",
  status: "PENDING",
  feedbackEnabled: true,
  records: [
    {
      type: "CNAME",
      name: "<value>",
      value: "<value>",
      status: "INVALID",
    },
  ],
  updatedAt: new Date("2025-04-28T08:11:46.808Z"),
  createdAt: new Date("2025-04-06T11:57:46.250Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `podId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | ID of pod.                                                                                    |
| `domainId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the domain.                                                                         |
| `domain`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the domain (e.g., `example.com`).                                                 |
| `status`                                                                                      | [components.Status](../../models/components/status.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `feedbackEnabled`                                                                             | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Bounce and complaint notifications are sent to your inboxes.                                  |
| `records`                                                                                     | [components.VerificationRecord](../../models/components/verification-record.md)[]             | :heavy_check_mark:                                                                            | A list of DNS records required to verify the domain.                                          |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Client ID of domain.                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which the domain was last updated.                                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which the domain was created.                                                         |