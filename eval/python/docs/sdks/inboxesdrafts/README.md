# InboxesDrafts

## Overview

### Available Operations

* [inboxes_drafts_list](#inboxes_drafts_list) - List Drafts
* [inboxes_drafts_create](#inboxes_drafts_create) - Create Draft
* [inboxes_drafts_get](#inboxes_drafts_get) - Get Draft
* [inboxes_drafts_update](#inboxes_drafts_update) - Update Draft
* [inboxes_drafts_delete](#inboxes_drafts_delete) - Delete Draft
* [inboxes_drafts_get_attachment](#inboxes_drafts_get_attachment) - Get Attachment
* [inboxes_drafts_send](#inboxes_drafts_send) - Send Draft

## inboxes_drafts_list

**CLI:**
```bash
agentmail inboxes:drafts list --inbox-id <inbox_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_drafts_list" method="get" path="/v0/inboxes/{inbox_id}/drafts" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes_drafts.inboxes_drafts_list(inbox_id="<id>")

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
| `retries`                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)     | :heavy_minus_sign:                                                   | Configuration to override the default retry behavior of the client.  |
| `server_url`                                                         | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | An optional server URL to use.                                       |

### Response

**[components.ListDraftsResponse](../../models/components/listdraftsresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_drafts_create

**CLI:**
```bash
agentmail inboxes:drafts create --inbox-id <inbox_id> --to recipient@example.com --subject "Draft subject" --text "Draft body"
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_drafts_create" method="post" path="/v0/inboxes/{inbox_id}/drafts" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes_drafts.inboxes_drafts_create(inbox_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                             | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `inbox_id`                                                                                            | *str*                                                                                                 | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `labels`                                                                                              | List[*str*]                                                                                           | :heavy_minus_sign:                                                                                    | Labels of draft.                                                                                      |
| `reply_to`                                                                                            | List[*str*]                                                                                           | :heavy_minus_sign:                                                                                    | Reply-to addresses. In format `username@domain.com` or `Display Name <username@domain.com>`.          |
| `to`                                                                                                  | List[*str*]                                                                                           | :heavy_minus_sign:                                                                                    | Addresses of recipients. In format `username@domain.com` or `Display Name <username@domain.com>`.     |
| `cc`                                                                                                  | List[*str*]                                                                                           | :heavy_minus_sign:                                                                                    | Addresses of CC recipients. In format `username@domain.com` or `Display Name <username@domain.com>`.  |
| `bcc`                                                                                                 | List[*str*]                                                                                           | :heavy_minus_sign:                                                                                    | Addresses of BCC recipients. In format `username@domain.com` or `Display Name <username@domain.com>`. |
| `subject`                                                                                             | *Optional[str]*                                                                                       | :heavy_minus_sign:                                                                                    | Subject of draft.                                                                                     |
| `text`                                                                                                | *Optional[str]*                                                                                       | :heavy_minus_sign:                                                                                    | Plain text body of draft.                                                                             |
| `html`                                                                                                | *Optional[str]*                                                                                       | :heavy_minus_sign:                                                                                    | HTML body of draft.                                                                                   |
| `attachments`                                                                                         | List[[components.SendAttachment](../../models/components/sendattachment.md)]                          | :heavy_minus_sign:                                                                                    | Attachments to include in draft.                                                                      |
| `in_reply_to`                                                                                         | *Optional[str]*                                                                                       | :heavy_minus_sign:                                                                                    | ID of message being replied to.                                                                       |
| `send_at`                                                                                             | [date](https://docs.python.org/3/library/datetime.html#date-objects)                                  | :heavy_minus_sign:                                                                                    | Time at which to schedule send draft.                                                                 |
| `client_id`                                                                                           | *Optional[str]*                                                                                       | :heavy_minus_sign:                                                                                    | Client ID of draft.                                                                                   |
| `retries`                                                                                             | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                      | :heavy_minus_sign:                                                                                    | Configuration to override the default retry behavior of the client.                                   |
| `server_url`                                                                                          | *Optional[str]*                                                                                       | :heavy_minus_sign:                                                                                    | An optional server URL to use.                                                                        |

### Response

**[components.Draft](../../models/components/draft.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_drafts_get

**CLI:**
```bash
agentmail inboxes:drafts get --inbox-id <inbox_id> --draft-id <draft_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_drafts_get" method="get" path="/v0/inboxes/{inbox_id}/drafts/{draft_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes_drafts.inboxes_drafts_get(inbox_id="<id>", draft_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `draft_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.Draft](../../models/components/draft.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_drafts_update

**CLI:**
```bash
agentmail inboxes:drafts update --inbox-id <inbox_id> --draft-id <draft_id> --subject "Updated subject"
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_drafts_update" method="patch" path="/v0/inboxes/{inbox_id}/drafts/{draft_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes_drafts.inboxes_drafts_update(inbox_id="<id>", draft_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                             | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `inbox_id`                                                                                            | *str*                                                                                                 | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `draft_id`                                                                                            | *str*                                                                                                 | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `reply_to`                                                                                            | List[*str*]                                                                                           | :heavy_minus_sign:                                                                                    | Reply-to addresses. In format `username@domain.com` or `Display Name <username@domain.com>`.          |
| `to`                                                                                                  | List[*str*]                                                                                           | :heavy_minus_sign:                                                                                    | Addresses of recipients. In format `username@domain.com` or `Display Name <username@domain.com>`.     |
| `cc`                                                                                                  | List[*str*]                                                                                           | :heavy_minus_sign:                                                                                    | Addresses of CC recipients. In format `username@domain.com` or `Display Name <username@domain.com>`.  |
| `bcc`                                                                                                 | List[*str*]                                                                                           | :heavy_minus_sign:                                                                                    | Addresses of BCC recipients. In format `username@domain.com` or `Display Name <username@domain.com>`. |
| `subject`                                                                                             | *Optional[str]*                                                                                       | :heavy_minus_sign:                                                                                    | Subject of draft.                                                                                     |
| `text`                                                                                                | *Optional[str]*                                                                                       | :heavy_minus_sign:                                                                                    | Plain text body of draft.                                                                             |
| `html`                                                                                                | *Optional[str]*                                                                                       | :heavy_minus_sign:                                                                                    | HTML body of draft.                                                                                   |
| `send_at`                                                                                             | [date](https://docs.python.org/3/library/datetime.html#date-objects)                                  | :heavy_minus_sign:                                                                                    | Time at which to schedule send draft.                                                                 |
| `retries`                                                                                             | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                      | :heavy_minus_sign:                                                                                    | Configuration to override the default retry behavior of the client.                                   |
| `server_url`                                                                                          | *Optional[str]*                                                                                       | :heavy_minus_sign:                                                                                    | An optional server URL to use.                                                                        |

### Response

**[components.Draft](../../models/components/draft.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_drafts_delete

**CLI:**
```bash
agentmail inboxes:drafts delete --inbox-id <inbox_id> --draft-id <draft_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_drafts_delete" method="delete" path="/v0/inboxes/{inbox_id}/drafts/{draft_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    agentmail_cli.inboxes_drafts.inboxes_drafts_delete(inbox_id="<id>", draft_id="<id>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `draft_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_drafts_get_attachment

**CLI:**
```bash
agentmail inboxes:drafts get-attachment --inbox-id <inbox_id> --draft-id <draft_id> --attachment-id <attachment_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_drafts_getAttachment" method="get" path="/v0/inboxes/{inbox_id}/drafts/{draft_id}/attachments/{attachment_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes_drafts.inboxes_drafts_get_attachment(inbox_id="<id>", draft_id="<id>", attachment_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `draft_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
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

## inboxes_drafts_send

**CLI:**
```bash
agentmail inboxes:drafts send --inbox-id <inbox_id> --draft-id <draft_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_drafts_send" method="post" path="/v0/inboxes/{inbox_id}/drafts/{draft_id}/send" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes_drafts.inboxes_drafts_send(inbox_id="<id>", draft_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `inbox_id`                                                                                 | *str*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `draft_id`                                                                                 | *str*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `add_labels`                                                                               | [Optional[components.UpdateMessageLabels]](../../models/components/updatemessagelabels.md) | :heavy_minus_sign:                                                                         | Label or list of labels.                                                                   |
| `remove_labels`                                                                            | [Optional[components.UpdateMessageLabels]](../../models/components/updatemessagelabels.md) | :heavy_minus_sign:                                                                         | Label or list of labels.                                                                   |
| `retries`                                                                                  | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `server_url`                                                                               | *Optional[str]*                                                                            | :heavy_minus_sign:                                                                         | An optional server URL to use.                                                             |

### Response

**[components.SendMessageResponse](../../models/components/sendmessageresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.ErrorResponse            | 403, 404                               | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |