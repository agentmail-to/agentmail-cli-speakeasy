# Pods.Domains

## Overview

### Available Operations

* [list](#list) - List Domains
* [create](#create) - Create Domain
* [get](#get) - Get Domain
* [update](#update) - Update Domain
* [delete](#delete) - Delete Domain
* [get_zone_file](#get_zone_file) - Get Zone File
* [verify](#verify) - Verify Domain

## list

**CLI:**
```bash
agentmail pods:domains list --pod-id <pod_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="pods_domains_list" method="get" path="/v0/pods/{pod_id}/domains" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.pods.domains.list(pod_id="<id>")

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

**[components.ListDomainsResponse](../../models/components/listdomainsresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## create

**CLI:**
```bash
agentmail pods:domains create --pod-id <pod_id> --domain example.com
```

### Example Usage

<!-- UsageSnippet language="python" operationID="pods_domains_create" method="post" path="/v0/pods/{pod_id}/domains" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.pods.domains.create(pod_id="<id>", domain="scientific-swanling.org", feedback_enabled=True)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `pod_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `domain`                                                            | *str*                                                               | :heavy_check_mark:                                                  | The name of the domain (e.g., `example.com`).                       |
| `feedback_enabled`                                                  | *bool*                                                              | :heavy_check_mark:                                                  | Bounce and complaint notifications are sent to your inboxes.        |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.Domain](../../models/components/domain.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## get

**CLI:**
```bash
agentmail pods:domains get --pod-id <pod_id> --domain-id <domain_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="pods_domains_get" method="get" path="/v0/pods/{pod_id}/domains/{domain_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.pods.domains.get(pod_id="<id>", domain_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `pod_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `domain_id`                                                         | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.Domain](../../models/components/domain.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## update

**CLI:**
```bash
agentmail pods:domains update --pod-id <pod_id> --domain-id <domain_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="pods_domains_update" method="patch" path="/v0/pods/{pod_id}/domains/{domain_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.pods.domains.update(pod_id="<id>", domain_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `pod_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `domain_id`                                                         | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `feedback_enabled`                                                  | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | Bounce and complaint notifications are sent to your inboxes.        |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.Domain](../../models/components/domain.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## delete

**CLI:**
```bash
agentmail pods:domains delete --pod-id <pod_id> --domain-id <domain_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="pods_domains_delete" method="delete" path="/v0/pods/{pod_id}/domains/{domain_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    agentmail_cli.pods.domains.delete(pod_id="<id>", domain_id="<id>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `pod_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `domain_id`                                                         | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## get_zone_file

**CLI:**
```bash
agentmail pods:domains get-zone-file --pod-id <pod_id> --domain-id <domain_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="pods_domains_getZoneFile" method="get" path="/v0/pods/{pod_id}/domains/{domain_id}/zone-file" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.pods.domains.get_zone_file(pod_id="<id>", domain_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `pod_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `domain_id`                                                         | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[httpx.Response](../../models/.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## verify

**CLI:**
```bash
agentmail pods:domains verify --pod-id <pod_id> --domain-id <domain_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="pods_domains_verify" method="post" path="/v0/pods/{pod_id}/domains/{domain_id}/verify" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    agentmail_cli.pods.domains.verify(pod_id="<id>", domain_id="<id>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `pod_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `domain_id`                                                         | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |