# agentmail

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *agentmail* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=agentmail&utm_campaign=typescript)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/agentmail/agentmail). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [agentmail](#agentmail)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.inboxesList();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      |
| ------------ | ---- | ----------- |
| `bearerAuth` | http | HTTP Bearer |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.inboxesList();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Agent](docs/sdks/agent/README.md)

* [agentSignUp](docs/sdks/agent/README.md#agentsignup) - Sign Up
* [agentVerify](docs/sdks/agent/README.md#agentverify) - Verify

### [ApiKeys](docs/sdks/apikeys/README.md)

* [apiKeysList](docs/sdks/apikeys/README.md#apikeyslist) - List API Keys
* [apiKeysCreate](docs/sdks/apikeys/README.md#apikeyscreate) - Create API Key
* [apiKeysDelete](docs/sdks/apikeys/README.md#apikeysdelete) - Delete API Key

### [Domains](docs/sdks/domains/README.md)

* [domainsList](docs/sdks/domains/README.md#domainslist) - List Domains
* [domainsCreate](docs/sdks/domains/README.md#domainscreate) - Create Domain
* [domainsGet](docs/sdks/domains/README.md#domainsget) - Get Domain
* [domainsUpdate](docs/sdks/domains/README.md#domainsupdate) - Update Domain
* [domainsDelete](docs/sdks/domains/README.md#domainsdelete) - Delete Domain
* [domainsGetZoneFile](docs/sdks/domains/README.md#domainsgetzonefile) - Get Zone File
* [domainsVerify](docs/sdks/domains/README.md#domainsverify) - Verify Domain

### [Drafts](docs/sdks/drafts/README.md)

* [draftsList](docs/sdks/drafts/README.md#draftslist) - List Drafts
* [draftsGet](docs/sdks/drafts/README.md#draftsget) - Get Draft
* [draftsGetAttachment](docs/sdks/drafts/README.md#draftsgetattachment) - Get Attachment

### [Inboxes](docs/sdks/inboxes/README.md)

* [inboxesList](docs/sdks/inboxes/README.md#inboxeslist) - List Inboxes
* [inboxesCreate](docs/sdks/inboxes/README.md#inboxescreate) - Create Inbox
* [inboxesGet](docs/sdks/inboxes/README.md#inboxesget) - Get Inbox
* [inboxesUpdate](docs/sdks/inboxes/README.md#inboxesupdate) - Update Inbox
* [inboxesDelete](docs/sdks/inboxes/README.md#inboxesdelete) - Delete Inbox

### [Inboxes.ApiKeys](docs/sdks/inboxesapikeys/README.md)

* [inboxesApiKeysList](docs/sdks/inboxesapikeys/README.md#inboxesapikeyslist) - List API Keys
* [inboxesApiKeysCreate](docs/sdks/inboxesapikeys/README.md#inboxesapikeyscreate) - Create API Key
* [inboxesApiKeysDelete](docs/sdks/inboxesapikeys/README.md#inboxesapikeysdelete) - Delete API Key

### [Inboxes.Drafts](docs/sdks/inboxesdrafts/README.md)

* [list](docs/sdks/inboxesdrafts/README.md#list) - List Drafts
* [create](docs/sdks/inboxesdrafts/README.md#create) - Create Draft
* [get](docs/sdks/inboxesdrafts/README.md#get) - Get Draft
* [update](docs/sdks/inboxesdrafts/README.md#update) - Update Draft
* [delete](docs/sdks/inboxesdrafts/README.md#delete) - Delete Draft
* [getAttachment](docs/sdks/inboxesdrafts/README.md#getattachment) - Get Attachment
* [send](docs/sdks/inboxesdrafts/README.md#send) - Send Draft

### [Inboxes.Events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - List Inbox Events

### [Inboxes.Lists](docs/sdks/inboxeslists/README.md)

* [list](docs/sdks/inboxeslists/README.md#list) - List Entries
* [create](docs/sdks/inboxeslists/README.md#create) - Create List Entry
* [get](docs/sdks/inboxeslists/README.md#get) - Get List Entry
* [delete](docs/sdks/inboxeslists/README.md#delete) - Delete List Entry

### [Inboxes.Messages](docs/sdks/messages/README.md)

* [list](docs/sdks/messages/README.md#list) - List Messages
* [get](docs/sdks/messages/README.md#get) - Get Message
* [update](docs/sdks/messages/README.md#update) - Update Message
* [delete](docs/sdks/messages/README.md#delete) - Delete Message
* [getAttachment](docs/sdks/messages/README.md#getattachment) - Get Attachment
* [getRaw](docs/sdks/messages/README.md#getraw) - Get Raw Message
* [send](docs/sdks/messages/README.md#send) - Send Message
* [reply](docs/sdks/messages/README.md#reply) - Reply To Message
* [replyAll](docs/sdks/messages/README.md#replyall) - Reply All Message
* [forward](docs/sdks/messages/README.md#forward) - Forward Message

### [Inboxes.Metrics](docs/sdks/inboxesmetrics/README.md)

* [query](docs/sdks/inboxesmetrics/README.md#query) - Query Metrics

### [Inboxes.Threads](docs/sdks/inboxesthreads/README.md)

* [list](docs/sdks/inboxesthreads/README.md#list) - List Threads
* [get](docs/sdks/inboxesthreads/README.md#get) - Get Thread
* [update](docs/sdks/inboxesthreads/README.md#update) - Update Thread
* [delete](docs/sdks/inboxesthreads/README.md#delete) - Delete Thread
* [getAttachment](docs/sdks/inboxesthreads/README.md#getattachment) - Get Attachment

### [Lists](docs/sdks/lists/README.md)

* [listsList](docs/sdks/lists/README.md#listslist) - List Entries
* [listsCreate](docs/sdks/lists/README.md#listscreate) - Create List Entry
* [listsGet](docs/sdks/lists/README.md#listsget) - Get List Entry
* [listsDelete](docs/sdks/lists/README.md#listsdelete) - Delete List Entry

### [Metrics](docs/sdks/metrics/README.md)

* [metricsQuery](docs/sdks/metrics/README.md#metricsquery) - Query Metrics

### [Organizations](docs/sdks/organizations/README.md)

* [organizationsGet](docs/sdks/organizations/README.md#organizationsget) - Get Organization

### [Pods](docs/sdks/pods/README.md)

* [podsList](docs/sdks/pods/README.md#podslist) - List Pods
* [podsCreate](docs/sdks/pods/README.md#podscreate) - Create Pod
* [podsGet](docs/sdks/pods/README.md#podsget) - Get Pod
* [podsDelete](docs/sdks/pods/README.md#podsdelete) - Delete Pod

### [Pods.ApiKeys](docs/sdks/podsapikeys/README.md)

* [podsApiKeysList](docs/sdks/podsapikeys/README.md#podsapikeyslist) - List API Keys
* [podsApiKeysCreate](docs/sdks/podsapikeys/README.md#podsapikeyscreate) - Create API Key
* [podsApiKeysDelete](docs/sdks/podsapikeys/README.md#podsapikeysdelete) - Delete API Key

### [Pods.Domains](docs/sdks/podsdomains/README.md)

* [list](docs/sdks/podsdomains/README.md#list) - List Domains
* [create](docs/sdks/podsdomains/README.md#create) - Create Domain
* [get](docs/sdks/podsdomains/README.md#get) - Get Domain
* [update](docs/sdks/podsdomains/README.md#update) - Update Domain
* [delete](docs/sdks/podsdomains/README.md#delete) - Delete Domain
* [getZoneFile](docs/sdks/podsdomains/README.md#getzonefile) - Get Zone File
* [verify](docs/sdks/podsdomains/README.md#verify) - Verify Domain

### [Pods.Drafts](docs/sdks/podsdrafts/README.md)

* [list](docs/sdks/podsdrafts/README.md#list) - List Drafts
* [get](docs/sdks/podsdrafts/README.md#get) - Get Draft
* [getAttachment](docs/sdks/podsdrafts/README.md#getattachment) - Get Attachment

### [Pods.Inboxes](docs/sdks/podsinboxes/README.md)

* [list](docs/sdks/podsinboxes/README.md#list) - List Inboxes
* [create](docs/sdks/podsinboxes/README.md#create) - Create Inbox
* [get](docs/sdks/podsinboxes/README.md#get) - Get Inbox
* [update](docs/sdks/podsinboxes/README.md#update) - Update Inbox
* [delete](docs/sdks/podsinboxes/README.md#delete) - Delete Inbox

### [Pods.Lists](docs/sdks/podslists/README.md)

* [list](docs/sdks/podslists/README.md#list) - List Entries
* [create](docs/sdks/podslists/README.md#create) - Create List Entry
* [get](docs/sdks/podslists/README.md#get) - Get List Entry
* [delete](docs/sdks/podslists/README.md#delete) - Delete List Entry

### [Pods.Metrics](docs/sdks/podsmetrics/README.md)

* [query](docs/sdks/podsmetrics/README.md#query) - Query Metrics

### [Pods.Threads](docs/sdks/podsthreads/README.md)

* [list](docs/sdks/podsthreads/README.md#list) - List Threads
* [get](docs/sdks/podsthreads/README.md#get) - Get Thread
* [update](docs/sdks/podsthreads/README.md#update) - Update Thread
* [delete](docs/sdks/podsthreads/README.md#delete) - Delete Thread
* [getAttachment](docs/sdks/podsthreads/README.md#getattachment) - Get Attachment

### [Threads](docs/sdks/threads/README.md)

* [threadsList](docs/sdks/threads/README.md#threadslist) - List Threads
* [threadsGet](docs/sdks/threads/README.md#threadsget) - Get Thread
* [threadsUpdate](docs/sdks/threads/README.md#threadsupdate) - Update Thread
* [threadsDelete](docs/sdks/threads/README.md#threadsdelete) - Delete Thread
* [threadsGetAttachment](docs/sdks/threads/README.md#threadsgetattachment) - Get Attachment

### [Webhooks](docs/sdks/webhooks/README.md)

* [webhooksList](docs/sdks/webhooks/README.md#webhookslist) - List Webhooks
* [webhooksCreate](docs/sdks/webhooks/README.md#webhookscreate) - Create Webhook
* [webhooksGet](docs/sdks/webhooks/README.md#webhooksget) - Get Webhook
* [webhooksUpdate](docs/sdks/webhooks/README.md#webhooksupdate) - Update Webhook
* [webhooksDelete](docs/sdks/webhooks/README.md#webhooksdelete) - Delete Webhook

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`agentAgentSignUp`](docs/sdks/agent/README.md#agentsignup) - Sign Up
- [`agentAgentVerify`](docs/sdks/agent/README.md#agentverify) - Verify
- [`apiKeysApiKeysCreate`](docs/sdks/apikeys/README.md#apikeyscreate) - Create API Key
- [`apiKeysApiKeysDelete`](docs/sdks/apikeys/README.md#apikeysdelete) - Delete API Key
- [`apiKeysApiKeysList`](docs/sdks/apikeys/README.md#apikeyslist) - List API Keys
- [`domainsDomainsCreate`](docs/sdks/domains/README.md#domainscreate) - Create Domain
- [`domainsDomainsDelete`](docs/sdks/domains/README.md#domainsdelete) - Delete Domain
- [`domainsDomainsGet`](docs/sdks/domains/README.md#domainsget) - Get Domain
- [`domainsDomainsGetZoneFile`](docs/sdks/domains/README.md#domainsgetzonefile) - Get Zone File
- [`domainsDomainsList`](docs/sdks/domains/README.md#domainslist) - List Domains
- [`domainsDomainsUpdate`](docs/sdks/domains/README.md#domainsupdate) - Update Domain
- [`domainsDomainsVerify`](docs/sdks/domains/README.md#domainsverify) - Verify Domain
- [`draftsDraftsGet`](docs/sdks/drafts/README.md#draftsget) - Get Draft
- [`draftsDraftsGetAttachment`](docs/sdks/drafts/README.md#draftsgetattachment) - Get Attachment
- [`draftsDraftsList`](docs/sdks/drafts/README.md#draftslist) - List Drafts
- [`inboxesApiKeysInboxesApiKeysCreate`](docs/sdks/inboxesapikeys/README.md#inboxesapikeyscreate) - Create API Key
- [`inboxesApiKeysInboxesApiKeysDelete`](docs/sdks/inboxesapikeys/README.md#inboxesapikeysdelete) - Delete API Key
- [`inboxesApiKeysInboxesApiKeysList`](docs/sdks/inboxesapikeys/README.md#inboxesapikeyslist) - List API Keys
- [`inboxesDraftsCreate`](docs/sdks/inboxesdrafts/README.md#create) - Create Draft
- [`inboxesDraftsDelete`](docs/sdks/inboxesdrafts/README.md#delete) - Delete Draft
- [`inboxesDraftsGet`](docs/sdks/inboxesdrafts/README.md#get) - Get Draft
- [`inboxesDraftsGetAttachment`](docs/sdks/inboxesdrafts/README.md#getattachment) - Get Attachment
- [`inboxesDraftsList`](docs/sdks/inboxesdrafts/README.md#list) - List Drafts
- [`inboxesDraftsSend`](docs/sdks/inboxesdrafts/README.md#send) - Send Draft
- [`inboxesDraftsUpdate`](docs/sdks/inboxesdrafts/README.md#update) - Update Draft
- [`inboxesEventsList`](docs/sdks/events/README.md#list) - List Inbox Events
- [`inboxesInboxesCreate`](docs/sdks/inboxes/README.md#inboxescreate) - Create Inbox
- [`inboxesInboxesDelete`](docs/sdks/inboxes/README.md#inboxesdelete) - Delete Inbox
- [`inboxesInboxesGet`](docs/sdks/inboxes/README.md#inboxesget) - Get Inbox
- [`inboxesInboxesList`](docs/sdks/inboxes/README.md#inboxeslist) - List Inboxes
- [`inboxesInboxesUpdate`](docs/sdks/inboxes/README.md#inboxesupdate) - Update Inbox
- [`inboxesListsCreate`](docs/sdks/inboxeslists/README.md#create) - Create List Entry
- [`inboxesListsDelete`](docs/sdks/inboxeslists/README.md#delete) - Delete List Entry
- [`inboxesListsGet`](docs/sdks/inboxeslists/README.md#get) - Get List Entry
- [`inboxesListsList`](docs/sdks/inboxeslists/README.md#list) - List Entries
- [`inboxesMessagesDelete`](docs/sdks/messages/README.md#delete) - Delete Message
- [`inboxesMessagesForward`](docs/sdks/messages/README.md#forward) - Forward Message
- [`inboxesMessagesGet`](docs/sdks/messages/README.md#get) - Get Message
- [`inboxesMessagesGetAttachment`](docs/sdks/messages/README.md#getattachment) - Get Attachment
- [`inboxesMessagesGetRaw`](docs/sdks/messages/README.md#getraw) - Get Raw Message
- [`inboxesMessagesList`](docs/sdks/messages/README.md#list) - List Messages
- [`inboxesMessagesReply`](docs/sdks/messages/README.md#reply) - Reply To Message
- [`inboxesMessagesReplyAll`](docs/sdks/messages/README.md#replyall) - Reply All Message
- [`inboxesMessagesSend`](docs/sdks/messages/README.md#send) - Send Message
- [`inboxesMessagesUpdate`](docs/sdks/messages/README.md#update) - Update Message
- [`inboxesMetricsQuery`](docs/sdks/inboxesmetrics/README.md#query) - Query Metrics
- [`inboxesThreadsDelete`](docs/sdks/inboxesthreads/README.md#delete) - Delete Thread
- [`inboxesThreadsGet`](docs/sdks/inboxesthreads/README.md#get) - Get Thread
- [`inboxesThreadsGetAttachment`](docs/sdks/inboxesthreads/README.md#getattachment) - Get Attachment
- [`inboxesThreadsList`](docs/sdks/inboxesthreads/README.md#list) - List Threads
- [`inboxesThreadsUpdate`](docs/sdks/inboxesthreads/README.md#update) - Update Thread
- [`listsListsCreate`](docs/sdks/lists/README.md#listscreate) - Create List Entry
- [`listsListsDelete`](docs/sdks/lists/README.md#listsdelete) - Delete List Entry
- [`listsListsGet`](docs/sdks/lists/README.md#listsget) - Get List Entry
- [`listsListsList`](docs/sdks/lists/README.md#listslist) - List Entries
- [`metricsMetricsQuery`](docs/sdks/metrics/README.md#metricsquery) - Query Metrics
- [`organizationsOrganizationsGet`](docs/sdks/organizations/README.md#organizationsget) - Get Organization
- [`podsApiKeysPodsApiKeysCreate`](docs/sdks/podsapikeys/README.md#podsapikeyscreate) - Create API Key
- [`podsApiKeysPodsApiKeysDelete`](docs/sdks/podsapikeys/README.md#podsapikeysdelete) - Delete API Key
- [`podsApiKeysPodsApiKeysList`](docs/sdks/podsapikeys/README.md#podsapikeyslist) - List API Keys
- [`podsDomainsCreate`](docs/sdks/podsdomains/README.md#create) - Create Domain
- [`podsDomainsDelete`](docs/sdks/podsdomains/README.md#delete) - Delete Domain
- [`podsDomainsGet`](docs/sdks/podsdomains/README.md#get) - Get Domain
- [`podsDomainsGetZoneFile`](docs/sdks/podsdomains/README.md#getzonefile) - Get Zone File
- [`podsDomainsList`](docs/sdks/podsdomains/README.md#list) - List Domains
- [`podsDomainsUpdate`](docs/sdks/podsdomains/README.md#update) - Update Domain
- [`podsDomainsVerify`](docs/sdks/podsdomains/README.md#verify) - Verify Domain
- [`podsDraftsGet`](docs/sdks/podsdrafts/README.md#get) - Get Draft
- [`podsDraftsGetAttachment`](docs/sdks/podsdrafts/README.md#getattachment) - Get Attachment
- [`podsDraftsList`](docs/sdks/podsdrafts/README.md#list) - List Drafts
- [`podsInboxesCreate`](docs/sdks/podsinboxes/README.md#create) - Create Inbox
- [`podsInboxesDelete`](docs/sdks/podsinboxes/README.md#delete) - Delete Inbox
- [`podsInboxesGet`](docs/sdks/podsinboxes/README.md#get) - Get Inbox
- [`podsInboxesList`](docs/sdks/podsinboxes/README.md#list) - List Inboxes
- [`podsInboxesUpdate`](docs/sdks/podsinboxes/README.md#update) - Update Inbox
- [`podsListsCreate`](docs/sdks/podslists/README.md#create) - Create List Entry
- [`podsListsDelete`](docs/sdks/podslists/README.md#delete) - Delete List Entry
- [`podsListsGet`](docs/sdks/podslists/README.md#get) - Get List Entry
- [`podsListsList`](docs/sdks/podslists/README.md#list) - List Entries
- [`podsMetricsQuery`](docs/sdks/podsmetrics/README.md#query) - Query Metrics
- [`podsPodsCreate`](docs/sdks/pods/README.md#podscreate) - Create Pod
- [`podsPodsDelete`](docs/sdks/pods/README.md#podsdelete) - Delete Pod
- [`podsPodsGet`](docs/sdks/pods/README.md#podsget) - Get Pod
- [`podsPodsList`](docs/sdks/pods/README.md#podslist) - List Pods
- [`podsThreadsDelete`](docs/sdks/podsthreads/README.md#delete) - Delete Thread
- [`podsThreadsGet`](docs/sdks/podsthreads/README.md#get) - Get Thread
- [`podsThreadsGetAttachment`](docs/sdks/podsthreads/README.md#getattachment) - Get Attachment
- [`podsThreadsList`](docs/sdks/podsthreads/README.md#list) - List Threads
- [`podsThreadsUpdate`](docs/sdks/podsthreads/README.md#update) - Update Thread
- [`threadsThreadsDelete`](docs/sdks/threads/README.md#threadsdelete) - Delete Thread
- [`threadsThreadsGet`](docs/sdks/threads/README.md#threadsget) - Get Thread
- [`threadsThreadsGetAttachment`](docs/sdks/threads/README.md#threadsgetattachment) - Get Attachment
- [`threadsThreadsList`](docs/sdks/threads/README.md#threadslist) - List Threads
- [`threadsThreadsUpdate`](docs/sdks/threads/README.md#threadsupdate) - Update Thread
- [`webhooksWebhooksCreate`](docs/sdks/webhooks/README.md#webhookscreate) - Create Webhook
- [`webhooksWebhooksDelete`](docs/sdks/webhooks/README.md#webhooksdelete) - Delete Webhook
- [`webhooksWebhooksGet`](docs/sdks/webhooks/README.md#webhooksget) - Get Webhook
- [`webhooksWebhooksList`](docs/sdks/webhooks/README.md#webhookslist) - List Webhooks
- [`webhooksWebhooksUpdate`](docs/sdks/webhooks/README.md#webhooksupdate) - Update Webhook

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.inboxesList(
    undefined,
    undefined,
    undefined,
    {
      retries: {
        strategy: "backoff",
        backoff: {
          initialInterval: 1,
          maxInterval: 50,
          exponent: 1.1,
          maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
      },
    },
  );

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.inboxesList();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`AgentmailCliError`](./src/models/errors/agentmail-cli-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { AgentmailCli } from "agentmail";
import * as errors from "agentmail/models/errors";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  try {
    const result = await agentmailCli.inboxes.inboxesCreate();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.AgentmailCliError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ValidationErrorResponse) {
        console.log(error.data$.name); // string
        console.log(error.data$.errors); // any
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`AgentmailCliError`](./src/models/errors/agentmail-cli-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (8)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`AgentmailCliError`](./src/models/errors/agentmail-cli-error.ts)**:
* [`ErrorResponse`](./src/models/errors/error-response.ts): . Applicable to 75 of 99 methods.*
* [`ValidationErrorResponse`](./src/models/errors/validation-error-response.ts): . Status code `400`. Applicable to 26 of 99 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { AgentmailCli } from "agentmail";
import { ProxyAgent } from "undici";
import { HTTPClient } from "agentmail/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new AgentmailCli({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { AgentmailCli } from "agentmail";

const sdk = new AgentmailCli({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=agentmail&utm_campaign=typescript)
