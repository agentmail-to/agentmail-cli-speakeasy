# PodsLists

## Overview

### Available Operations

* [podsListsList](#podslistslist) - List Entries
* [podsListsCreate](#podslistscreate) - Create List Entry
* [podsListsGet](#podslistsget) - Get List Entry
* [podsListsDelete](#podslistsdelete) - Delete List Entry

## podsListsList

**CLI:**
```bash
agentmail pods:lists list --pod-id <pod_id> --direction <direction> --type <type>
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="pods_lists_list" method="get" path="/v0/pods/{pod_id}/lists/{direction}/{type}" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.podsLists.podsListsList({
    podId: "<id>",
    direction: "send",
    type: "block",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { podsListsPodsListsList } from "agentmail/funcs/pods-lists-pods-lists-list.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await podsListsPodsListsList(agentmailCli, {
    podId: "<id>",
    direction: "send",
    type: "block",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("podsListsPodsListsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PodsListsListRequest](../../models/operations/pods-lists-list-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.PodListListEntriesResponse](../../models/components/pod-list-list-entries-response.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.AgentmailCliDefaultError | 4XX, 5XX                        | \*/\*                           |

## podsListsCreate

**CLI:**
```bash
agentmail pods:lists create --pod-id <pod_id> --direction <direction> --type <type> --entry user@example.com
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="pods_lists_create" method="post" path="/v0/pods/{pod_id}/lists/{direction}/{type}" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.podsLists.podsListsCreate("<id>", "send", "allow", {
    entry: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { podsListsPodsListsCreate } from "agentmail/funcs/pods-lists-pods-lists-create.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await podsListsPodsListsCreate(agentmailCli, "<id>", "send", "allow", {
    entry: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("podsListsPodsListsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `podId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `direction`                                                                                                                                                                    | [components.Direction](../../models/components/direction.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | Direction of list entry.                                                                                                                                                       |
| `type`                                                                                                                                                                         | [components.ListType](../../models/components/list-type.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | Type of list entry.                                                                                                                                                            |
| `body`                                                                                                                                                                         | [components.CreateListEntryRequest](../../models/components/create-list-entry-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.PodListEntry](../../models/components/pod-list-entry.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ValidationErrorResponse  | 400                             | application/json                |
| errors.AgentmailCliDefaultError | 4XX, 5XX                        | \*/\*                           |

## podsListsGet

**CLI:**
```bash
agentmail pods:lists get --pod-id <pod_id> --direction <direction> --type <type> --entry <entry>
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="pods_lists_get" method="get" path="/v0/pods/{pod_id}/lists/{direction}/{type}/{entry}" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.podsLists.podsListsGet("<id>", "reply", "block", "<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { podsListsPodsListsGet } from "agentmail/funcs/pods-lists-pods-lists-get.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await podsListsPodsListsGet(agentmailCli, "<id>", "reply", "block", "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("podsListsPodsListsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `podId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `direction`                                                                                                                                                                    | [components.Direction](../../models/components/direction.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | Direction of list entry.                                                                                                                                                       |
| `type`                                                                                                                                                                         | [components.ListType](../../models/components/list-type.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | Type of list entry.                                                                                                                                                            |
| `entry`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Email address or domain.                                                                                                                                                       |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.PodListEntry](../../models/components/pod-list-entry.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 404                             | application/json                |
| errors.AgentmailCliDefaultError | 4XX, 5XX                        | \*/\*                           |

## podsListsDelete

**CLI:**
```bash
agentmail pods:lists delete --pod-id <pod_id> --direction <direction> --type <type> --entry <entry>
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="pods_lists_delete" method="delete" path="/v0/pods/{pod_id}/lists/{direction}/{type}/{entry}" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await agentmailCli.podsLists.podsListsDelete("<id>", "reply", "block", "<value>");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { podsListsPodsListsDelete } from "agentmail/funcs/pods-lists-pods-lists-delete.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await podsListsPodsListsDelete(agentmailCli, "<id>", "reply", "block", "<value>");
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("podsListsPodsListsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `podId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `direction`                                                                                                                                                                    | [components.Direction](../../models/components/direction.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | Direction of list entry.                                                                                                                                                       |
| `type`                                                                                                                                                                         | [components.ListType](../../models/components/list-type.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | Type of list entry.                                                                                                                                                            |
| `entry`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Email address or domain.                                                                                                                                                       |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<void\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 404                             | application/json                |
| errors.AgentmailCliDefaultError | 4XX, 5XX                        | \*/\*                           |