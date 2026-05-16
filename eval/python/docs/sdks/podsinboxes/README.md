# Pods.Inboxes

## Overview

### Available Operations

* [list](#list) - List Inboxes
* [create](#create) - Create Inbox
* [get](#get) - Get Inbox
* [update](#update) - Update Inbox
* [delete](#delete) - Delete Inbox

## list

**CLI:**
```bash
agentmail pods:inboxes list --pod-id <pod_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="pods_inboxes_list" method="get" path="/v0/pods/{pod_id}/inboxes" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.pods.inboxes.list(pod_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `pod_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `page_token`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ascending`                                                         | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.InboxesListInboxesResponse](../../models/components/inboxeslistinboxesresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## create

**CLI:**
```bash
agentmail pods:inboxes create --pod-id <pod_id> --username myagent --domain example.com
```

### Example Usage

<!-- UsageSnippet language="python" operationID="pods_inboxes_create" method="post" path="/v0/pods/{pod_id}/inboxes" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.pods.inboxes.create(pod_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                               | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `pod_id`                                                                | *str*                                                                   | :heavy_check_mark:                                                      | N/A                                                                     |
| `username`                                                              | *OptionalNullable[str]*                                                 | :heavy_minus_sign:                                                      | Username of address. Randomly generated if not specified.               |
| `domain`                                                                | *OptionalNullable[str]*                                                 | :heavy_minus_sign:                                                      | Domain of address. Must be verified domain. Defaults to `agentmail.to`. |
| `display_name`                                                          | *Optional[str]*                                                         | :heavy_minus_sign:                                                      | Display name: `Display Name <username@domain.com>`.                     |
| `client_id`                                                             | *Optional[str]*                                                         | :heavy_minus_sign:                                                      | Client ID of inbox.                                                     |
| `retries`                                                               | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)        | :heavy_minus_sign:                                                      | Configuration to override the default retry behavior of the client.     |
| `server_url`                                                            | *Optional[str]*                                                         | :heavy_minus_sign:                                                      | An optional server URL to use.                                          |

### Response

**[components.InboxesInbox](../../models/components/inboxesinbox.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## get

**CLI:**
```bash
agentmail pods:inboxes get --pod-id <pod_id> --inbox-id <inbox_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="pods_inboxes_get" method="get" path="/v0/pods/{pod_id}/inboxes/{inbox_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.pods.inboxes.get(pod_id="<id>", inbox_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `pod_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.InboxesInbox](../../models/components/inboxesinbox.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## update

**CLI:**
```bash
agentmail pods:inboxes update --pod-id <pod_id> --inbox-id <inbox_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="pods_inboxes_update" method="patch" path="/v0/pods/{pod_id}/inboxes/{inbox_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.pods.inboxes.update(pod_id="<id>", inbox_id="<id>", display_name="Newton87")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `pod_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `display_name`                                                      | *str*                                                               | :heavy_check_mark:                                                  | Display name: `Display Name <username@domain.com>`.                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.InboxesInbox](../../models/components/inboxesinbox.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## delete

**CLI:**
```bash
agentmail pods:inboxes delete --pod-id <pod_id> --inbox-id <inbox_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="pods_inboxes_delete" method="delete" path="/v0/pods/{pod_id}/inboxes/{inbox_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    agentmail_cli.pods.inboxes.delete(pod_id="<id>", inbox_id="<id>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `pod_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |