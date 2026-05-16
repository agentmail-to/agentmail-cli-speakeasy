# Inboxes.Lists

## Overview

### Available Operations

* [list](#list) - List Entries
* [create](#create) - Create List Entry
* [get](#get) - Get List Entry
* [delete](#delete) - Delete List Entry

## list

**CLI:**
```bash
agentmail inboxes:lists list --inbox-id <inbox_id> --direction <direction> --type <type>
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="inboxes_lists_list" method="get" path="/v0/inboxes/{inbox_id}/lists/{direction}/{type}" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.lists.list({
    inboxId: "<id>",
    direction: "reply",
    type: "allow",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { inboxesListsList } from "agentmail/funcs/inboxes-lists-list.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await inboxesListsList(agentmailCli, {
    inboxId: "<id>",
    direction: "reply",
    type: "allow",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inboxesListsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InboxesListsListRequest](../../models/operations/inboxes-lists-list-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## create

**CLI:**
```bash
agentmail inboxes:lists create --inbox-id <inbox_id> --direction <direction> --type <type> --entry user@example.com
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="inboxes_lists_create" method="post" path="/v0/inboxes/{inbox_id}/lists/{direction}/{type}" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.lists.create("<id>", "reply", "allow", {
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
import { inboxesListsCreate } from "agentmail/funcs/inboxes-lists-create.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await inboxesListsCreate(agentmailCli, "<id>", "reply", "allow", {
    entry: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inboxesListsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `inboxId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
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

## get

**CLI:**
```bash
agentmail inboxes:lists get --inbox-id <inbox_id> --direction <direction> --type <type> --entry <entry>
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="inboxes_lists_get" method="get" path="/v0/inboxes/{inbox_id}/lists/{direction}/{type}/{entry}" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.lists.get("<id>", "send", "block", "<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { inboxesListsGet } from "agentmail/funcs/inboxes-lists-get.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await inboxesListsGet(agentmailCli, "<id>", "send", "block", "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inboxesListsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `inboxId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
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

## delete

**CLI:**
```bash
agentmail inboxes:lists delete --inbox-id <inbox_id> --direction <direction> --type <type> --entry <entry>
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="inboxes_lists_delete" method="delete" path="/v0/inboxes/{inbox_id}/lists/{direction}/{type}/{entry}" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await agentmailCli.inboxes.lists.delete("<id>", "reply", "allow", "<value>");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { inboxesListsDelete } from "agentmail/funcs/inboxes-lists-delete.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await inboxesListsDelete(agentmailCli, "<id>", "reply", "allow", "<value>");
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("inboxesListsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `inboxId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
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