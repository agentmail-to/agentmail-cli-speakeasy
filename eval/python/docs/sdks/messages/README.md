# Inboxes.Messages

## Overview

### Available Operations

* [list](#list) - List Messages
* [get](#get) - Get Message
* [update](#update) - Update Message
* [delete](#delete) - Delete Message
* [get_attachment](#get_attachment) - Get Attachment
* [get_raw](#get_raw) - Get Raw Message
* [send](#send) - Send Message
* [reply](#reply) - Reply To Message
* [reply_all](#reply_all) - Reply All Message
* [forward](#forward) - Forward Message

## list

**CLI:**
```bash
agentmail inboxes:messages list --inbox-id <inbox_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_messages_list" method="get" path="/v0/inboxes/{inbox_id}/messages" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.messages.list(inbox_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `inbox_id`                                                           | *str*                                                                | :heavy_check_mark:                                                   | N/A                                                                  |
| `limit`                                                              | *Optional[int]*                                                      | :heavy_minus_sign:                                                   | N/A                                                                  |
| `page_token`                                                         | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | N/A                                                                  |
| `labels`                                                             | List[*str*]                                                          | :heavy_minus_sign:                                                   | N/A                                                                  |
| `before`                                                             | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `after`                                                              | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `ascending`                                                          | *Optional[bool]*                                                     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `include_spam`                                                       | *Optional[bool]*                                                     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `include_blocked`                                                    | *Optional[bool]*                                                     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `include_trash`                                                      | *Optional[bool]*                                                     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `retries`                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)     | :heavy_minus_sign:                                                   | Configuration to override the default retry behavior of the client.  |
| `server_url`                                                         | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | An optional server URL to use.                                       |

### Response

**[components.ListMessagesResponse](../../models/components/listmessagesresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## get

**CLI:**
```bash
agentmail inboxes:messages get --inbox-id <inbox_id> --message-id <message_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_messages_get" method="get" path="/v0/inboxes/{inbox_id}/messages/{message_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.messages.get(inbox_id="<id>", message_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `message_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.Message](../../models/components/message.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## update

**CLI:**
```bash
agentmail inboxes:messages update --inbox-id <inbox_id> --message-id <message_id> --add-label read --remove-label unread
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_messages_update" method="patch" path="/v0/inboxes/{inbox_id}/messages/{message_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.messages.update(inbox_id="<id>", message_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `inbox_id`                                                                                 | *str*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `message_id`                                                                               | *str*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `add_labels`                                                                               | [Optional[components.UpdateMessageLabels]](../../models/components/updatemessagelabels.md) | :heavy_minus_sign:                                                                         | Label or list of labels.                                                                   |
| `remove_labels`                                                                            | [Optional[components.UpdateMessageLabels]](../../models/components/updatemessagelabels.md) | :heavy_minus_sign:                                                                         | Label or list of labels.                                                                   |
| `retries`                                                                                  | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `server_url`                                                                               | *Optional[str]*                                                                            | :heavy_minus_sign:                                                                         | An optional server URL to use.                                                             |

### Response

**[components.UpdateMessageResponse](../../models/components/updatemessageresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## delete

Permanently deletes a message.

**CLI:**
```bash
agentmail inboxes:messages delete --inbox-id <inbox_id> --message-id <message_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_messages_delete" method="delete" path="/v0/inboxes/{inbox_id}/messages/{message_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    agentmail_cli.inboxes.messages.delete(inbox_id="<id>", message_id="<id>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `message_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## get_attachment

**CLI:**
```bash
agentmail inboxes:messages get-attachment --inbox-id <inbox_id> --message-id <message_id> --attachment-id <attachment_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_messages_getAttachment" method="get" path="/v0/inboxes/{inbox_id}/messages/{message_id}/attachments/{attachment_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.messages.get_attachment(inbox_id="<id>", message_id="<id>", attachment_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `message_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `attachment_id`                                                     | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.AttachmentResponse](../../models/components/attachmentresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## get_raw

**CLI:**
```bash
agentmail inboxes:messages get-raw --inbox-id <inbox_id> --message-id <message_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_messages_getRaw" method="get" path="/v0/inboxes/{inbox_id}/messages/{message_id}/raw" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.messages.get_raw(inbox_id="<id>", message_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `message_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.RawMessageResponse](../../models/components/rawmessageresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## send

**CLI:**
```bash
agentmail inboxes:messages send --inbox-id <inbox_id> --to recipient@example.com --subject "Hello" --text "Body"
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_messages_send" method="post" path="/v0/inboxes/{inbox_id}/messages/send" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.messages.send(inbox_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `inbox_id`                                                                               | *str*                                                                                    | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `labels`                                                                                 | List[*str*]                                                                              | :heavy_minus_sign:                                                                       | Labels of message.                                                                       |
| `reply_to`                                                                               | [Optional[components.SendMessageReplyTo]](../../models/components/sendmessagereplyto.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `to`                                                                                     | [Optional[components.SendMessageTo]](../../models/components/sendmessageto.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `cc`                                                                                     | [Optional[components.SendMessageCc]](../../models/components/sendmessagecc.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `bcc`                                                                                    | [Optional[components.SendMessageBcc]](../../models/components/sendmessagebcc.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `subject`                                                                                | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | Subject of message.                                                                      |
| `text`                                                                                   | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | Plain text body of message.                                                              |
| `html`                                                                                   | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | HTML body of message.                                                                    |
| `attachments`                                                                            | List[[components.SendAttachment](../../models/components/sendattachment.md)]             | :heavy_minus_sign:                                                                       | Attachments to include in message.                                                       |
| `headers`                                                                                | Dict[str, *str*]                                                                         | :heavy_minus_sign:                                                                       | Headers to include in message.                                                           |
| `retries`                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `server_url`                                                                             | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | An optional server URL to use.                                                           |

### Response

**[components.SendMessageResponse](../../models/components/sendmessageresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.ErrorResponse            | 403, 404                               | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## reply

**CLI:**
```bash
agentmail inboxes:messages reply --inbox-id <inbox_id> --message-id <message_id> --text "Reply text"
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_messages_reply" method="post" path="/v0/inboxes/{inbox_id}/messages/{message_id}/reply" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.messages.reply(inbox_id="<id>", message_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `inbox_id`                                                                               | *str*                                                                                    | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `message_id`                                                                             | *str*                                                                                    | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `labels`                                                                                 | List[*str*]                                                                              | :heavy_minus_sign:                                                                       | Labels of message.                                                                       |
| `reply_to`                                                                               | [Optional[components.SendMessageReplyTo]](../../models/components/sendmessagereplyto.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `to`                                                                                     | [Optional[components.SendMessageTo]](../../models/components/sendmessageto.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `cc`                                                                                     | [Optional[components.SendMessageCc]](../../models/components/sendmessagecc.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `bcc`                                                                                    | [Optional[components.SendMessageBcc]](../../models/components/sendmessagebcc.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `reply_all`                                                                              | *Optional[bool]*                                                                         | :heavy_minus_sign:                                                                       | Reply to all recipients of the original message.                                         |
| `text`                                                                                   | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | Plain text body of message.                                                              |
| `html`                                                                                   | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | HTML body of message.                                                                    |
| `attachments`                                                                            | List[[components.SendAttachment](../../models/components/sendattachment.md)]             | :heavy_minus_sign:                                                                       | Attachments to include in message.                                                       |
| `headers`                                                                                | Dict[str, *str*]                                                                         | :heavy_minus_sign:                                                                       | Headers to include in message.                                                           |
| `retries`                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `server_url`                                                                             | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | An optional server URL to use.                                                           |

### Response

**[components.SendMessageResponse](../../models/components/sendmessageresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.ErrorResponse            | 403, 404                               | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## reply_all

**CLI:**
```bash
agentmail inboxes:messages reply-all --inbox-id <inbox_id> --message-id <message_id> --text "Reply text"
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_messages_reply-all" method="post" path="/v0/inboxes/{inbox_id}/messages/{message_id}/reply-all" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.messages.reply_all(inbox_id="<id>", message_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `inbox_id`                                                                               | *str*                                                                                    | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `message_id`                                                                             | *str*                                                                                    | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `labels`                                                                                 | List[*str*]                                                                              | :heavy_minus_sign:                                                                       | Labels of message.                                                                       |
| `reply_to`                                                                               | [Optional[components.SendMessageReplyTo]](../../models/components/sendmessagereplyto.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `text`                                                                                   | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | Plain text body of message.                                                              |
| `html`                                                                                   | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | HTML body of message.                                                                    |
| `attachments`                                                                            | List[[components.SendAttachment](../../models/components/sendattachment.md)]             | :heavy_minus_sign:                                                                       | Attachments to include in message.                                                       |
| `headers`                                                                                | Dict[str, *str*]                                                                         | :heavy_minus_sign:                                                                       | Headers to include in message.                                                           |
| `retries`                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `server_url`                                                                             | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | An optional server URL to use.                                                           |

### Response

**[components.SendMessageResponse](../../models/components/sendmessageresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.ErrorResponse            | 403, 404                               | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## forward

**CLI:**
```bash
agentmail inboxes:messages forward --inbox-id <inbox_id> --message-id <message_id> --to recipient@example.com
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_messages_forward" method="post" path="/v0/inboxes/{inbox_id}/messages/{message_id}/forward" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.messages.forward(inbox_id="<id>", message_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `inbox_id`                                                                               | *str*                                                                                    | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `message_id`                                                                             | *str*                                                                                    | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `labels`                                                                                 | List[*str*]                                                                              | :heavy_minus_sign:                                                                       | Labels of message.                                                                       |
| `reply_to`                                                                               | [Optional[components.SendMessageReplyTo]](../../models/components/sendmessagereplyto.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `to`                                                                                     | [Optional[components.SendMessageTo]](../../models/components/sendmessageto.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `cc`                                                                                     | [Optional[components.SendMessageCc]](../../models/components/sendmessagecc.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `bcc`                                                                                    | [Optional[components.SendMessageBcc]](../../models/components/sendmessagebcc.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `subject`                                                                                | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | Subject of message.                                                                      |
| `text`                                                                                   | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | Plain text body of message.                                                              |
| `html`                                                                                   | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | HTML body of message.                                                                    |
| `attachments`                                                                            | List[[components.SendAttachment](../../models/components/sendattachment.md)]             | :heavy_minus_sign:                                                                       | Attachments to include in message.                                                       |
| `headers`                                                                                | Dict[str, *str*]                                                                         | :heavy_minus_sign:                                                                       | Headers to include in message.                                                           |
| `retries`                                                                                | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `server_url`                                                                             | *Optional[str]*                                                                          | :heavy_minus_sign:                                                                       | An optional server URL to use.                                                           |

### Response

**[components.SendMessageResponse](../../models/components/sendmessageresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.ErrorResponse            | 403, 404                               | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |