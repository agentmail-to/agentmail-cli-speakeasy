# Attachment

## Example Usage

```typescript
import { Attachment } from "agentmail/models/components";

let value: Attachment = {
  attachmentId: "<id>",
  size: 940508,
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