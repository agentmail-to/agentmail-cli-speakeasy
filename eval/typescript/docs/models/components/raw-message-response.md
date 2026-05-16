# RawMessageResponse

S3 presigned URL to download the raw .eml file.

## Example Usage

```typescript
import { RawMessageResponse } from "agentmail/models/components";

let value: RawMessageResponse = {
  messageId: "<id>",
  size: 22648,
  downloadUrl: "https://querulous-mechanic.info",
  expiresAt: new Date("2026-12-31T03:17:48.641Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `messageId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of message.                                                                                |
| `size`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | Size of message in bytes.                                                                     |
| `downloadUrl`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | S3 presigned URL to download the raw message. Expires at expires_at.                          |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time at which the download URL expires.                                                       |