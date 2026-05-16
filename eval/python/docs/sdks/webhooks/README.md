# Webhooks

## Overview

### Available Operations

* [webhooks_list](#webhooks_list) - List Webhooks
* [webhooks_create](#webhooks_create) - Create Webhook
* [webhooks_get](#webhooks_get) - Get Webhook
* [webhooks_update](#webhooks_update) - Update Webhook
* [webhooks_delete](#webhooks_delete) - Delete Webhook

## webhooks_list

**CLI:**
```bash
agentmail webhooks list
```

### Example Usage

<!-- UsageSnippet language="python" operationID="webhooks_list" method="get" path="/v0/webhooks" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.webhooks.webhooks_list()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `page_token`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ascending`                                                         | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.WebhooksListWebhooksResponse](../../models/components/webhookslistwebhooksresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## webhooks_create

**CLI:**
```bash
agentmail webhooks create --url https://example.com/webhook --event-type message.received
```

### Example Usage

<!-- UsageSnippet language="python" operationID="webhooks_create" method="post" path="/v0/webhooks" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.webhooks.webhooks_create(url="https://odd-zebra.org/", event_types=[
        "message.rejected",
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `url`                                                               | *str*                                                               | :heavy_check_mark:                                                  | URL of webhook endpoint.                                            |
| `event_types`                                                       | List[[components.EventType](../../models/components/eventtype.md)]  | :heavy_check_mark:                                                  | Event types for which to send events.                               |
| `pod_ids`                                                           | List[*str*]                                                         | :heavy_minus_sign:                                                  | Pods for which to send events. Maximum 10 per webhook.              |
| `inbox_ids`                                                         | List[*str*]                                                         | :heavy_minus_sign:                                                  | Inboxes for which to send events. Maximum 10 per webhook.           |
| `client_id`                                                         | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Client ID of webhook.                                               |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.WebhooksWebhook](../../models/components/webhookswebhook.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## webhooks_get

**CLI:**
```bash
agentmail webhooks get --webhook-id <webhook_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="webhooks_get" method="get" path="/v0/webhooks/{webhook_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.webhooks.webhooks_get(webhook_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `webhook_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.WebhooksWebhook](../../models/components/webhookswebhook.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## webhooks_update

**CLI:**
```bash
agentmail webhooks update --webhook-id <webhook_id> --add-inbox-id <inbox_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="webhooks_update" method="patch" path="/v0/webhooks/{webhook_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.webhooks.webhooks_update(webhook_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `webhook_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `add_inbox_ids`                                                     | List[*str*]                                                         | :heavy_minus_sign:                                                  | Inboxes for which to send events. Maximum 10 per webhook.           |
| `remove_inbox_ids`                                                  | List[*str*]                                                         | :heavy_minus_sign:                                                  | Inboxes for which to send events. Maximum 10 per webhook.           |
| `add_pod_ids`                                                       | List[*str*]                                                         | :heavy_minus_sign:                                                  | Pods for which to send events. Maximum 10 per webhook.              |
| `remove_pod_ids`                                                    | List[*str*]                                                         | :heavy_minus_sign:                                                  | Pods for which to send events. Maximum 10 per webhook.              |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.WebhooksWebhook](../../models/components/webhookswebhook.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## webhooks_delete

**CLI:**
```bash
agentmail webhooks delete --webhook-id <webhook_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="webhooks_delete" method="delete" path="/v0/webhooks/{webhook_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    agentmail_cli.webhooks.webhooks_delete(webhook_id="<id>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `webhook_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |