# Inboxes.ApiKeys

## Overview

### Available Operations

* [inboxes_api_keys_list](#inboxes_api_keys_list) - List API Keys
* [inboxes_api_keys_create](#inboxes_api_keys_create) - Create API Key
* [inboxes_api_keys_delete](#inboxes_api_keys_delete) - Delete API Key

## inboxes_api_keys_list

**CLI:**
```bash
agentmail inboxes:api-keys list --inbox-id <inbox_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_apiKeys_list" method="get" path="/v0/inboxes/{inbox_id}/api-keys" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.api_keys.inboxes_api_keys_list(inbox_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `page_token`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Response

**[components.ListAPIKeysResponse](../../models/components/listapikeysresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_api_keys_create

**CLI:**
```bash
agentmail inboxes:api-keys create --inbox-id <inbox_id> --name "My Key"
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_apiKeys_create" method="post" path="/v0/inboxes/{inbox_id}/api-keys" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.api_keys.inboxes_api_keys_create(inbox_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                             | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `inbox_id`                                                                                                                            | *str*                                                                                                                                 | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `name`                                                                                                                                | *Optional[str]*                                                                                                                       | :heavy_minus_sign:                                                                                                                    | Name of api key.                                                                                                                      |
| `permissions`                                                                                                                         | [Optional[components.APIKeyPermissions]](../../models/components/apikeypermissions.md)                                                | :heavy_minus_sign:                                                                                                                    | Granular permissions for the API key. When ommitted all permissions are granted. Otherwise, only permissions set to true are granted. |
| `retries`                                                                                                                             | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                      | :heavy_minus_sign:                                                                                                                    | Configuration to override the default retry behavior of the client.                                                                   |
| `server_url`                                                                                                                          | *Optional[str]*                                                                                                                       | :heavy_minus_sign:                                                                                                                    | An optional server URL to use.                                                                                                        |

### Response

**[components.CreateAPIKeyResponse](../../models/components/createapikeyresponse.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |

## inboxes_api_keys_delete

**CLI:**
```bash
agentmail inboxes:api-keys delete --inbox-id <inbox_id> --api-key-id <api_key_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_apiKeys_delete" method="delete" path="/v0/inboxes/{inbox_id}/api-keys/{api_key_id}" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    agentmail_cli.inboxes.api_keys.inboxes_api_keys_delete(inbox_id="<id>", api_key_id="<id>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `inbox_id`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `api_key_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `server_url`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | An optional server URL to use.                                      |

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ErrorResponse            | 404                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |