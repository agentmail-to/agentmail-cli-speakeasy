# Inboxes.Drafts

## Overview

### Available Operations

* [list](#list) - List Drafts
* [create](#create) - Create Draft
* [get](#get) - Get Draft
* [update](#update) - Update Draft
* [delete](#delete) - Delete Draft
* [getAttachment](#getattachment) - Get Attachment
* [send](#send) - Send Draft

## list

**CLI:**
```bash
agentmail inboxes:drafts list --inbox-id <inbox_id>
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="inboxes_drafts_list" method="get" path="/v0/inboxes/{inbox_id}/drafts" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.drafts.list({
    inboxId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { inboxesDraftsList } from "agentmail/funcs/inboxes-drafts-list.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await inboxesDraftsList(agentmailCli, {
    inboxId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inboxesDraftsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InboxesDraftsListRequest](../../models/operations/inboxes-drafts-list-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.ListDraftsResponse](../../models/components/list-drafts-response.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 404                             | application/json                |
| errors.AgentmailCliDefaultError | 4XX, 5XX                        | \*/\*                           |

## create

**CLI:**
```bash
agentmail inboxes:drafts create --inbox-id <inbox_id> --to recipient@example.com --subject "Draft subject" --text "Draft body"
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="inboxes_drafts_create" method="post" path="/v0/inboxes/{inbox_id}/drafts" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.drafts.create("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { inboxesDraftsCreate } from "agentmail/funcs/inboxes-drafts-create.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await inboxesDraftsCreate(agentmailCli, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inboxesDraftsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `inboxId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `body`                                                                                                                                                                         | [components.CreateDraftRequest](../../models/components/create-draft-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.Draft](../../models/components/draft.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 404                             | application/json                |
| errors.AgentmailCliDefaultError | 4XX, 5XX                        | \*/\*                           |

## get

**CLI:**
```bash
agentmail inboxes:drafts get --inbox-id <inbox_id> --draft-id <draft_id>
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="inboxes_drafts_get" method="get" path="/v0/inboxes/{inbox_id}/drafts/{draft_id}" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.drafts.get("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { inboxesDraftsGet } from "agentmail/funcs/inboxes-drafts-get.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await inboxesDraftsGet(agentmailCli, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inboxesDraftsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `inboxId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `draftId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.Draft](../../models/components/draft.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 404                             | application/json                |
| errors.AgentmailCliDefaultError | 4XX, 5XX                        | \*/\*                           |

## update

**CLI:**
```bash
agentmail inboxes:drafts update --inbox-id <inbox_id> --draft-id <draft_id> --subject "Updated subject"
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="inboxes_drafts_update" method="patch" path="/v0/inboxes/{inbox_id}/drafts/{draft_id}" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.drafts.update("<id>", "<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { inboxesDraftsUpdate } from "agentmail/funcs/inboxes-drafts-update.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await inboxesDraftsUpdate(agentmailCli, "<id>", "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inboxesDraftsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `inboxId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `draftId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `body`                                                                                                                                                                         | [components.UpdateDraftRequest](../../models/components/update-draft-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.Draft](../../models/components/draft.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 404                             | application/json                |
| errors.AgentmailCliDefaultError | 4XX, 5XX                        | \*/\*                           |

## delete

**CLI:**
```bash
agentmail inboxes:drafts delete --inbox-id <inbox_id> --draft-id <draft_id>
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="inboxes_drafts_delete" method="delete" path="/v0/inboxes/{inbox_id}/drafts/{draft_id}" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  await agentmailCli.inboxes.drafts.delete("<id>", "<id>");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { inboxesDraftsDelete } from "agentmail/funcs/inboxes-drafts-delete.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await inboxesDraftsDelete(agentmailCli, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("inboxesDraftsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `inboxId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `draftId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
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

## getAttachment

**CLI:**
```bash
agentmail inboxes:drafts get-attachment --inbox-id <inbox_id> --draft-id <draft_id> --attachment-id <attachment_id>
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="inboxes_drafts_getAttachment" method="get" path="/v0/inboxes/{inbox_id}/drafts/{draft_id}/attachments/{attachment_id}" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.drafts.getAttachment("<id>", "<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { inboxesDraftsGetAttachment } from "agentmail/funcs/inboxes-drafts-get-attachment.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await inboxesDraftsGetAttachment(agentmailCli, "<id>", "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inboxesDraftsGetAttachment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `inboxId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `draftId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `attachmentId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.AttachmentResponse](../../models/components/attachment-response.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 404                             | application/json                |
| errors.AgentmailCliDefaultError | 4XX, 5XX                        | \*/\*                           |

## send

**CLI:**
```bash
agentmail inboxes:drafts send --inbox-id <inbox_id> --draft-id <draft_id>
```

### Example Usage

<!-- UsageSnippet language="typescript" operationID="inboxes_drafts_send" method="post" path="/v0/inboxes/{inbox_id}/drafts/{draft_id}/send" -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.drafts.send("<id>", "<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AgentmailCliCore } from "agentmail/core.js";
import { inboxesDraftsSend } from "agentmail/funcs/inboxes-drafts-send.js";

// Use `AgentmailCliCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const agentmailCli = new AgentmailCliCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await inboxesDraftsSend(agentmailCli, "<id>", "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inboxesDraftsSend failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `inboxId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `draftId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `body`                                                                                                                                                                         | [components.UpdateMessageRequest](../../models/components/update-message-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[components.SendMessageResponse](../../models/components/send-message-response.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ValidationErrorResponse  | 400                             | application/json                |
| errors.ErrorResponse            | 403, 404                        | application/json                |
| errors.AgentmailCliDefaultError | 4XX, 5XX                        | \*/\*                           |