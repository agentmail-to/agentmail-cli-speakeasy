# Organization

Organization details with usage limits and counts.

## Example Usage

```typescript
import { Organization } from "agentmail/models/components";

let value: Organization = {
  organizationId: "<id>",
  inboxCount: 876527,
  domainCount: 164019,
  updatedAt: new Date("2025-09-21T03:00:08.692Z"),
  createdAt: new Date("2025-07-11T06:03:56.483Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of organization.                                                                           |
| `inboxCount`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | Current number of inboxes.                                                                    |
| `domainCount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Current number of domains.                                                                    |
| `inboxLimit`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | Maximum number of inboxes allowed.                                                            |
| `domainLimit`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Maximum number of domains allowed.                                                            |
| `billingId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider-agnostic billing customer ID.                                                        |
| `billingType`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Billing provider type (e.g. "stripe").                                                        |
| `billingSubscriptionId`                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Active billing subscription ID.                                                               |
| `authenticationId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider-agnostic authentication ID.                                                          |
| `authenticationType`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Authentication provider type.                                                                 |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which organization was last updated.                                                  |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which organization was created.                                                       |