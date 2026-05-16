# SendAttachment

## Example Usage

```typescript
import { SendAttachment } from "agentmail/models/components";

let value: SendAttachment = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `filename`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Filename of attachment.                                                                              |
| `contentType`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Content type of attachment.                                                                          |
| `contentDisposition`                                                                                 | [components.AttachmentContentDisposition](../../models/components/attachment-content-disposition.md) | :heavy_minus_sign:                                                                                   | Content disposition of attachment.                                                                   |
| `contentId`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Content ID of attachment.                                                                            |
| `content`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Base64 encoded content of attachment.                                                                |
| `url`                                                                                                | *string*                                                                                             | :heavy_minus_sign:                                                                                   | URL to the attachment.                                                                               |