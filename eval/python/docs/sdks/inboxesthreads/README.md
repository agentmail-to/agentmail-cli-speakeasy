# InboxesThreads

## Overview

### Available Operations

* [inboxes_threads_list](#inboxes_threads_list) - List Threads
* [inboxes_threads_get](#inboxes_threads_get) - Get Thread
* [inboxes_threads_update](#inboxes_threads_update) - Update Thread
* [inboxes_threads_delete](#inboxes_threads_delete) - Delete Thread
* [inboxes_threads_get_attachment](#inboxes_threads_get_attachment) - Get Attachment

## inboxes_threads_list

**CLI:**
```bash
agentmail inboxes:threads list --inbox-id <inbox_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_threads_list" method="get" path="/v0/inboxes/{inbox_id}/threads" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes_threads.inboxes_threads_list(inbox_id="<id>")

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

**[components.ListThreadsResponse](../../models/components/listthreadsresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_threads_get

**CLI:**
```bash
agentmail inboxes:threads get --inbox-id <inbox_id> --thread-id <thread_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_threads_get" method="get" path="/v0/inboxes/{inbox_id}/threads/{thread_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes_threads.inboxes_threads_get(inbox_id="<id>", thread_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `thread_id`                                                         | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.Thread](../../models/components/thread.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_threads_update

Updates thread labels. Cannot add or remove system labels (sent, received, bounced, etc.). Rejects requests with a `422` for threads with 100 or more messages.

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_threads_update" method="patch" path="/v0/inboxes/{inbox_id}/threads/{thread_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes_threads.inboxes_threads_update(inbox_id="<id>", thread_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                             | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `inbox_id`                                                                                                                            | *str*                                                                                                                                 | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `thread_id`                                                                                                                           | *str*                                                                                                                                 | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `add_labels`                                                                                                                          | List[*str*]                                                                                                                           | :heavy_minus_sign:                                                                                                                    | Labels to add to thread. Cannot be system labels.                                                                                     |
| `remove_labels`                                                                                                                       | List[*str*]                                                                                                                           | :heavy_minus_sign:                                                                                                                    | Labels to remove from thread. Cannot be system labels. Takes priority over `add_labels` (in the event of duplicate labels passed in). |
| `retries`                                                                                                                             | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                      | :heavy_minus_sign:                                                                                                                    | Configuration to override the default retry behavior of the client.                                                                   |
| `server_url`                                                                                                                          | *Optional[str]*                                                                                                                       | :heavy_minus_sign:                                                                                                                    | An optional server URL to use.                                                                                                        |

### Response

**[components.UpdateThreadResponse](../../models/components/updatethreadresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.ErrorResponse            | 404, 422                               | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_threads_delete

Moves the thread to trash by adding a trash label to all messages. If the thread is already in trash, it will be permanently deleted. Use `permanent=true` to force permanent deletion.

**CLI:**
```bash
agentmail inboxes:threads delete --inbox-id <inbox_id> --thread-id <thread_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_threads_delete" method="delete" path="/v0/inboxes/{inbox_id}/threads/{thread_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    agentmail_cli.inboxes_threads.inboxes_threads_delete(inbox_id="<id>", thread_id="<id>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `thread_id`                                                         | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `permanent`                                                         | *OptionalNullable[bool]*                                            | :heavy_minus_sign:                                                  | If true, permanently delete the thread instead of moving to trash.  |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_threads_get_attachment

**CLI:**
```bash
agentmail inboxes:threads get-attachment --inbox-id <inbox_id> --thread-id <thread_id> --attachment-id <attachment_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_threads_getAttachment" method="get" path="/v0/inboxes/{inbox_id}/threads/{thread_id}/attachments/{attachment_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes_threads.inboxes_threads_get_attachment(inbox_id="<id>", thread_id="<id>", attachment_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `thread_id`                                                         | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
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