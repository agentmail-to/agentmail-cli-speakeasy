# InboxEvent

## Example Usage

```typescript
import { InboxEvent } from "agentmail/models/components";

let value: InboxEvent = {
  organizationId: "<id>",
  podId: "<id>",
  inboxId: "<id>",
  eventId: "<id>",
  eventType: "label_added",
  messageId: "<id>",
  label: "<value>",
  eventAt: new Date("2025-12-29T23:47:36.073Z"),
  createdAt: new Date("2024-07-30T13:59:00.380Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of organization.                                                                           |
| `podId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of pod.                                                                                    |
| `inboxId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the inbox.                                                                          |
| `eventId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of event.                                                                                  |
| `eventType`                                                                                   | [components.InboxEventType](../../models/components/inbox-event-type.md)                      | :heavy_check_mark:                                                                            | Type of inbox event.                                                                          |
| `messageId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of message.                                                                                |
| `label`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Label added or removed.                                                                       |
| `eventAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which the event occurred.                                                             |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which the event was recorded.                                                         |