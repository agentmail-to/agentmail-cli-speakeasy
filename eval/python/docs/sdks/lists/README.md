# Lists

## Overview

### Available Operations

* [lists_list](#lists_list) - List Entries
* [lists_create](#lists_create) - Create List Entry
* [lists_get](#lists_get) - Get List Entry
* [lists_delete](#lists_delete) - Delete List Entry

## lists_list

**CLI:**
```bash
agentmail lists list --direction <direction> --type <type>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="lists_list" method="get" path="/v0/lists/{direction}/{type}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.lists.lists_list(direction="reply", type_="allow")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `direction`                                                         | [components.Direction](../../models/components/direction.md)        | :heavy_check_mark:                                                  | Direction of list entry.                                            |
| `type`                                                              | [components.ListType](../../models/components/listtype.md)          | :heavy_check_mark:                                                  | Type of list entry.                                                 |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `page_token`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.ListListEntriesResponse](../../models/components/listlistentriesresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## lists_create

**CLI:**
```bash
agentmail lists create --direction <direction> --type <type> --entry user@example.com
```

### Example Usage

<!-- UsageSnippet language="python" operationID="lists_create" method="post" path="/v0/lists/{direction}/{type}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.lists.lists_create(direction="receive", type_="allow", entry="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `direction`                                                         | [components.Direction](../../models/components/direction.md)        | :heavy_check_mark:                                                  | Direction of list entry.                                            |
| `type`                                                              | [components.ListType](../../models/components/listtype.md)          | :heavy_check_mark:                                                  | Type of list entry.                                                 |
| `entry`                                                             | *str*                                                               | :heavy_check_mark:                                                  | Email address or domain to add.                                     |
| `reason`                                                            | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Reason for adding the entry.                                        |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.ListEntry](../../models/components/listentry.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## lists_get

**CLI:**
```bash
agentmail lists get --direction <direction> --type <type> --entry <entry>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="lists_get" method="get" path="/v0/lists/{direction}/{type}/{entry}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.lists.lists_get(direction="send", type_="allow", entry="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `direction`                                                         | [components.Direction](../../models/components/direction.md)        | :heavy_check_mark:                                                  | Direction of list entry.                                            |
| `type`                                                              | [components.ListType](../../models/components/listtype.md)          | :heavy_check_mark:                                                  | Type of list entry.                                                 |
| `entry`                                                             | *str*                                                               | :heavy_check_mark:                                                  | Email address or domain.                                            |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.ListEntry](../../models/components/listentry.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## lists_delete

**CLI:**
```bash
agentmail lists delete --direction <direction> --type <type> --entry <entry>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="lists_delete" method="delete" path="/v0/lists/{direction}/{type}/{entry}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    agentmail_cli.lists.lists_delete(direction="reply", type_="block", entry="<value>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `direction`                                                         | [components.Direction](../../models/components/direction.md)        | :heavy_check_mark:                                                  | Direction of list entry.                                            |
| `type`                                                              | [components.ListType](../../models/components/listtype.md)          | :heavy_check_mark:                                                  | Type of list entry.                                                 |
| `entry`                                                             | *str*                                                               | :heavy_check_mark:                                                  | Email address or domain.                                            |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |