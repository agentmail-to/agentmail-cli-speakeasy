# RawMessageResponse

S3 presigned URL to download the raw .eml file.


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `message_id`                                                         | *str*                                                                | :heavy_check_mark:                                                   | ID of message.                                                       |
| `size`                                                               | *int*                                                                | :heavy_check_mark:                                                   | Size of message in bytes.                                            |
| `download_url`                                                       | *str*                                                                | :heavy_check_mark:                                                   | S3 presigned URL to download the raw message. Expires at expires_at. |
| `expires_at`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Time at which the download URL expires.                              |