# AttachmentResponse

## Example Usage

```typescript
import { AttachmentResponse } from "agentmail/models/components";

let value: AttachmentResponse = {
  attachmentId: "<id>",
  size: 517937,
  downloadUrl: "https://youthful-lounge.net/",
  expiresAt: new Date("2026-07-06T04:26:40.785Z"),
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `attachmentId`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of attachment.                                                                                    |
| `filename`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Filename of attachment.                                                                              |
| `size`                                                                                               | *number*                                                                                             | :heavy_check_mark:                                                                                   | Size of attachment in bytes.                                                                         |
| `contentType`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Content type of attachment.                                                                          |
| `contentDisposition`                                                                                 | [components.AttachmentContentDisposition](../../models/components/attachment-content-disposition.md) | :heavy_minus_sign:                                                                                   | Content disposition of attachment.                                                                   |
| `contentId`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Content ID of attachment.                                                                            |
| `downloadUrl`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | URL to download the attachment.                                                                      |
| `expiresAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Time at which the download URL expires.                                                              |