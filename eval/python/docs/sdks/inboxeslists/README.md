# InboxesLists

## Overview

### Available Operations

* [inboxes_lists_list](#inboxes_lists_list) - List Entries
* [inboxes_lists_create](#inboxes_lists_create) - Create List Entry
* [inboxes_lists_get](#inboxes_lists_get) - Get List Entry
* [inboxes_lists_delete](#inboxes_lists_delete) - Delete List Entry

## inboxes_lists_list

**CLI:**
```bash
agentmail inboxes:lists list --inbox-id <inbox_id> --direction <direction> --type <type>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_lists_list" method="get" path="/v0/inboxes/{inbox_id}/lists/{direction}/{type}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes_lists.inboxes_lists_list(inbox_id="<id>", direction="reply", type_="allow")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `direction`                                                         | [components.Direction](../../models/components/direction.md)        | :heavy_check_mark:                                                  | Direction of list entry.                                            |
| `type`                                                              | [components.ListType](../../models/components/listtype.md)          | :heavy_check_mark:                                                  | Type of list entry.                                                 |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `page_token`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.PodListListEntriesResponse](../../models/components/podlistlistentriesresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_lists_create

**CLI:**
```bash
agentmail inboxes:lists create --inbox-id <inbox_id> --direction <direction> --type <type> --entry user@example.com
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_lists_create" method="post" path="/v0/inboxes/{inbox_id}/lists/{direction}/{type}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes_lists.inboxes_lists_create(inbox_id="<id>", direction="reply", type_="allow", entry="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `direction`                                                         | [components.Direction](../../models/components/direction.md)        | :heavy_check_mark:                                                  | Direction of list entry.                                            |
| `type`                                                              | [components.ListType](../../models/components/listtype.md)          | :heavy_check_mark:                                                  | Type of list entry.                                                 |
| `entry`                                                             | *str*                                                               | :heavy_check_mark:                                                  | Email address or domain to add.                                     |
| `reason`                                                            | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Reason for adding the entry.                                        |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.PodListEntry](../../models/components/podlistentry.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_lists_get

**CLI:**
```bash
agentmail inboxes:lists get --inbox-id <inbox_id> --direction <direction> --type <type> --entry <entry>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_lists_get" method="get" path="/v0/inboxes/{inbox_id}/lists/{direction}/{type}/{entry}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes_lists.inboxes_lists_get(inbox_id="<id>", direction="send", type_="block", entry="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `direction`                                                         | [components.Direction](../../models/components/direction.md)        | :heavy_check_mark:                                                  | Direction of list entry.                                            |
| `type`                                                              | [components.ListType](../../models/components/listtype.md)          | :heavy_check_mark:                                                  | Type of list entry.                                                 |
| `entry`                                                             | *str*                                                               | :heavy_check_mark:                                                  | Email address or domain.                                            |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.PodListEntry](../../models/components/podlistentry.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_lists_delete

**CLI:**
```bash
agentmail inboxes:lists delete --inbox-id <inbox_id> --direction <direction> --type <type> --entry <entry>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_lists_delete" method="delete" path="/v0/inboxes/{inbox_id}/lists/{direction}/{type}/{entry}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    agentmail_cli.inboxes_lists.inboxes_lists_delete(inbox_id="<id>", direction="reply", type_="allow", entry="<value>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
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