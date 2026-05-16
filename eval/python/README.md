# agentmail

Developer-friendly & type-safe Python SDK specifically catered to leverage *agentmail* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=agentmail&utm_campaign=python)
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
  * [IDE Support](#ide-support)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Resource Management](#resource-management)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to PyPI you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


> [!NOTE]
> **Python version upgrade policy**
>
> Once a Python version reaches its [official end of life date](https://devguide.python.org/versions/), a 3-month grace period is provided for users to upgrade. Following this grace period, the minimum python version supported in the SDK will be updated.

The SDK can be installed with *uv*, *pip*, or *poetry* package managers.

### uv

*uv* is a fast Python package installer and resolver, designed as a drop-in replacement for pip and pip-tools. It's recommended for its speed and modern Python tooling capabilities.

```bash
uv add git+<UNSET>.git
```

### PIP

*PIP* is the default package installer for Python, enabling easy installation and management of packages from PyPI via the command line.

```bash
pip install git+<UNSET>.git
```

### Poetry

*Poetry* is a modern tool that simplifies dependency management and package publishing by using a single `pyproject.toml` file to handle project metadata and dependencies.

```bash
poetry add git+<UNSET>.git
```

### Shell and script usage with `uv`

You can use this SDK in a Python shell with [uv](https://docs.astral.sh/uv/) and the `uvx` command that comes with it like so:

```shell
uvx --from agentmail python
```

It's also possible to write a standalone Python script without needing to set up a whole project like so:

```python
#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "agentmail",
# ]
# ///

from agentmail import AgentmailCli

sdk = AgentmailCli(
  # SDK arguments
)

# Rest of script here...
```

Once that is saved to a file, you can run it with `uv run script.py` where
`script.py` can be replaced with the actual file name.
<!-- End SDK Installation [installation] -->

<!-- Start IDE Support [idesupport] -->
## IDE Support

### PyCharm

Generally, the SDK will work well with most IDEs out of the box. However, when using PyCharm, you can enjoy much better integration with Pydantic by installing an additional plugin.

- [PyCharm Pydantic Plugin](https://docs.pydantic.dev/latest/integrations/pycharm/)
<!-- End IDE Support [idesupport] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```python
# Synchronous Example
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.inboxes_list()

    # Handle response
    print(res)
```

</br>

The same SDK client can also be used to make asynchronous requests by importing asyncio.

```python
# Asynchronous Example
from agentmail import AgentmailCli
import asyncio

async def main():

    async with AgentmailCli(
        bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
    ) as agentmail_cli:

        res = await agentmail_cli.inboxes.inboxes_list_async()

        # Handle response
        print(res)

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name          | Type | Scheme      |
| ------------- | ---- | ----------- |
| `bearer_auth` | http | HTTP Bearer |

To authenticate with the API the `bearer_auth` parameter must be set when initializing the SDK client instance. For example:
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.inboxes_list()

    # Handle response
    print(res)

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Agent](docs/sdks/agent/README.md)

* [agent_sign_up](docs/sdks/agent/README.md#agent_sign_up) - Sign Up
* [agent_verify](docs/sdks/agent/README.md#agent_verify) - Verify

### [ApiKeys](docs/sdks/apikeys/README.md)

* [api_keys_list](docs/sdks/apikeys/README.md#api_keys_list) - List API Keys
* [api_keys_create](docs/sdks/apikeys/README.md#api_keys_create) - Create API Key
* [api_keys_delete](docs/sdks/apikeys/README.md#api_keys_delete) - Delete API Key

### [Domains](docs/sdks/domains/README.md)

* [domains_list](docs/sdks/domains/README.md#domains_list) - List Domains
* [domains_create](docs/sdks/domains/README.md#domains_create) - Create Domain
* [domains_get](docs/sdks/domains/README.md#domains_get) - Get Domain
* [domains_update](docs/sdks/domains/README.md#domains_update) - Update Domain
* [domains_delete](docs/sdks/domains/README.md#domains_delete) - Delete Domain
* [domains_get_zone_file](docs/sdks/domains/README.md#domains_get_zone_file) - Get Zone File
* [domains_verify](docs/sdks/domains/README.md#domains_verify) - Verify Domain

### [Drafts](docs/sdks/drafts/README.md)

* [drafts_list](docs/sdks/drafts/README.md#drafts_list) - List Drafts
* [drafts_get](docs/sdks/drafts/README.md#drafts_get) - Get Draft
* [drafts_get_attachment](docs/sdks/drafts/README.md#drafts_get_attachment) - Get Attachment

### [Inboxes](docs/sdks/inboxes/README.md)

* [inboxes_list](docs/sdks/inboxes/README.md#inboxes_list) - List Inboxes
* [inboxes_create](docs/sdks/inboxes/README.md#inboxes_create) - Create Inbox
* [inboxes_get](docs/sdks/inboxes/README.md#inboxes_get) - Get Inbox
* [inboxes_update](docs/sdks/inboxes/README.md#inboxes_update) - Update Inbox
* [inboxes_delete](docs/sdks/inboxes/README.md#inboxes_delete) - Delete Inbox

### [InboxesApiKeys](docs/sdks/inboxesapikeys/README.md)

* [inboxes_api_keys_list](docs/sdks/inboxesapikeys/README.md#inboxes_api_keys_list) - List API Keys
* [inboxes_api_keys_create](docs/sdks/inboxesapikeys/README.md#inboxes_api_keys_create) - Create API Key
* [inboxes_api_keys_delete](docs/sdks/inboxesapikeys/README.md#inboxes_api_keys_delete) - Delete API Key

### [InboxesDrafts](docs/sdks/inboxesdrafts/README.md)

* [inboxes_drafts_list](docs/sdks/inboxesdrafts/README.md#inboxes_drafts_list) - List Drafts
* [inboxes_drafts_create](docs/sdks/inboxesdrafts/README.md#inboxes_drafts_create) - Create Draft
* [inboxes_drafts_get](docs/sdks/inboxesdrafts/README.md#inboxes_drafts_get) - Get Draft
* [inboxes_drafts_update](docs/sdks/inboxesdrafts/README.md#inboxes_drafts_update) - Update Draft
* [inboxes_drafts_delete](docs/sdks/inboxesdrafts/README.md#inboxes_drafts_delete) - Delete Draft
* [inboxes_drafts_get_attachment](docs/sdks/inboxesdrafts/README.md#inboxes_drafts_get_attachment) - Get Attachment
* [inboxes_drafts_send](docs/sdks/inboxesdrafts/README.md#inboxes_drafts_send) - Send Draft

### [InboxesEvents](docs/sdks/inboxesevents/README.md)

* [inboxes_events_list](docs/sdks/inboxesevents/README.md#inboxes_events_list) - List Inbox Events

### [InboxesLists](docs/sdks/inboxeslists/README.md)

* [inboxes_lists_list](docs/sdks/inboxeslists/README.md#inboxes_lists_list) - List Entries
* [inboxes_lists_create](docs/sdks/inboxeslists/README.md#inboxes_lists_create) - Create List Entry
* [inboxes_lists_get](docs/sdks/inboxeslists/README.md#inboxes_lists_get) - Get List Entry
* [inboxes_lists_delete](docs/sdks/inboxeslists/README.md#inboxes_lists_delete) - Delete List Entry

### [InboxesMessages](docs/sdks/inboxesmessages/README.md)

* [inboxes_messages_list](docs/sdks/inboxesmessages/README.md#inboxes_messages_list) - List Messages
* [inboxes_messages_get](docs/sdks/inboxesmessages/README.md#inboxes_messages_get) - Get Message
* [inboxes_messages_update](docs/sdks/inboxesmessages/README.md#inboxes_messages_update) - Update Message
* [inboxes_messages_delete](docs/sdks/inboxesmessages/README.md#inboxes_messages_delete) - Delete Message
* [inboxes_messages_get_attachment](docs/sdks/inboxesmessages/README.md#inboxes_messages_get_attachment) - Get Attachment
* [inboxes_messages_get_raw](docs/sdks/inboxesmessages/README.md#inboxes_messages_get_raw) - Get Raw Message
* [inboxes_messages_send](docs/sdks/inboxesmessages/README.md#inboxes_messages_send) - Send Message
* [inboxes_messages_reply](docs/sdks/inboxesmessages/README.md#inboxes_messages_reply) - Reply To Message
* [inboxes_messages_reply_all](docs/sdks/inboxesmessages/README.md#inboxes_messages_reply_all) - Reply All Message
* [inboxes_messages_forward](docs/sdks/inboxesmessages/README.md#inboxes_messages_forward) - Forward Message

### [InboxesMetrics](docs/sdks/inboxesmetrics/README.md)

* [inboxes_metrics_query](docs/sdks/inboxesmetrics/README.md#inboxes_metrics_query) - Query Metrics

### [InboxesThreads](docs/sdks/inboxesthreads/README.md)

* [inboxes_threads_list](docs/sdks/inboxesthreads/README.md#inboxes_threads_list) - List Threads
* [inboxes_threads_get](docs/sdks/inboxesthreads/README.md#inboxes_threads_get) - Get Thread
* [inboxes_threads_update](docs/sdks/inboxesthreads/README.md#inboxes_threads_update) - Update Thread
* [inboxes_threads_delete](docs/sdks/inboxesthreads/README.md#inboxes_threads_delete) - Delete Thread
* [inboxes_threads_get_attachment](docs/sdks/inboxesthreads/README.md#inboxes_threads_get_attachment) - Get Attachment

### [Lists](docs/sdks/lists/README.md)

* [lists_list](docs/sdks/lists/README.md#lists_list) - List Entries
* [lists_create](docs/sdks/lists/README.md#lists_create) - Create List Entry
* [lists_get](docs/sdks/lists/README.md#lists_get) - Get List Entry
* [lists_delete](docs/sdks/lists/README.md#lists_delete) - Delete List Entry

### [Metrics](docs/sdks/metrics/README.md)

* [metrics_query](docs/sdks/metrics/README.md#metrics_query) - Query Metrics

### [Organizations](docs/sdks/organizations/README.md)

* [organizations_get](docs/sdks/organizations/README.md#organizations_get) - Get Organization

### [Pods](docs/sdks/pods/README.md)

* [pods_list](docs/sdks/pods/README.md#pods_list) - List Pods
* [pods_create](docs/sdks/pods/README.md#pods_create) - Create Pod
* [pods_get](docs/sdks/pods/README.md#pods_get) - Get Pod
* [pods_delete](docs/sdks/pods/README.md#pods_delete) - Delete Pod

### [PodsApiKeys](docs/sdks/podsapikeys/README.md)

* [pods_api_keys_list](docs/sdks/podsapikeys/README.md#pods_api_keys_list) - List API Keys
* [pods_api_keys_create](docs/sdks/podsapikeys/README.md#pods_api_keys_create) - Create API Key
* [pods_api_keys_delete](docs/sdks/podsapikeys/README.md#pods_api_keys_delete) - Delete API Key

### [PodsDomains](docs/sdks/podsdomains/README.md)

* [pods_domains_list](docs/sdks/podsdomains/README.md#pods_domains_list) - List Domains
* [pods_domains_create](docs/sdks/podsdomains/README.md#pods_domains_create) - Create Domain
* [pods_domains_get](docs/sdks/podsdomains/README.md#pods_domains_get) - Get Domain
* [pods_domains_update](docs/sdks/podsdomains/README.md#pods_domains_update) - Update Domain
* [pods_domains_delete](docs/sdks/podsdomains/README.md#pods_domains_delete) - Delete Domain
* [pods_domains_get_zone_file](docs/sdks/podsdomains/README.md#pods_domains_get_zone_file) - Get Zone File
* [pods_domains_verify](docs/sdks/podsdomains/README.md#pods_domains_verify) - Verify Domain

### [PodsDrafts](docs/sdks/podsdrafts/README.md)

* [pods_drafts_list](docs/sdks/podsdrafts/README.md#pods_drafts_list) - List Drafts
* [pods_drafts_get](docs/sdks/podsdrafts/README.md#pods_drafts_get) - Get Draft
* [pods_drafts_get_attachment](docs/sdks/podsdrafts/README.md#pods_drafts_get_attachment) - Get Attachment

### [PodsInboxes](docs/sdks/podsinboxes/README.md)

* [pods_inboxes_list](docs/sdks/podsinboxes/README.md#pods_inboxes_list) - List Inboxes
* [pods_inboxes_create](docs/sdks/podsinboxes/README.md#pods_inboxes_create) - Create Inbox
* [pods_inboxes_get](docs/sdks/podsinboxes/README.md#pods_inboxes_get) - Get Inbox
* [pods_inboxes_update](docs/sdks/podsinboxes/README.md#pods_inboxes_update) - Update Inbox
* [pods_inboxes_delete](docs/sdks/podsinboxes/README.md#pods_inboxes_delete) - Delete Inbox

### [PodsLists](docs/sdks/podslists/README.md)

* [pods_lists_list](docs/sdks/podslists/README.md#pods_lists_list) - List Entries
* [pods_lists_create](docs/sdks/podslists/README.md#pods_lists_create) - Create List Entry
* [pods_lists_get](docs/sdks/podslists/README.md#pods_lists_get) - Get List Entry
* [pods_lists_delete](docs/sdks/podslists/README.md#pods_lists_delete) - Delete List Entry

### [PodsMetrics](docs/sdks/podsmetrics/README.md)

* [pods_metrics_query](docs/sdks/podsmetrics/README.md#pods_metrics_query) - Query Metrics

### [PodsThreads](docs/sdks/podsthreads/README.md)

* [pods_threads_list](docs/sdks/podsthreads/README.md#pods_threads_list) - List Threads
* [pods_threads_get](docs/sdks/podsthreads/README.md#pods_threads_get) - Get Thread
* [pods_threads_update](docs/sdks/podsthreads/README.md#pods_threads_update) - Update Thread
* [pods_threads_delete](docs/sdks/podsthreads/README.md#pods_threads_delete) - Delete Thread
* [pods_threads_get_attachment](docs/sdks/podsthreads/README.md#pods_threads_get_attachment) - Get Attachment

### [Threads](docs/sdks/threads/README.md)

* [threads_list](docs/sdks/threads/README.md#threads_list) - List Threads
* [threads_get](docs/sdks/threads/README.md#threads_get) - Get Thread
* [threads_update](docs/sdks/threads/README.md#threads_update) - Update Thread
* [threads_delete](docs/sdks/threads/README.md#threads_delete) - Delete Thread
* [threads_get_attachment](docs/sdks/threads/README.md#threads_get_attachment) - Get Attachment

### [Webhooks](docs/sdks/webhooks/README.md)

* [webhooks_list](docs/sdks/webhooks/README.md#webhooks_list) - List Webhooks
* [webhooks_create](docs/sdks/webhooks/README.md#webhooks_create) - Create Webhook
* [webhooks_get](docs/sdks/webhooks/README.md#webhooks_get) - Get Webhook
* [webhooks_update](docs/sdks/webhooks/README.md#webhooks_update) - Update Webhook
* [webhooks_delete](docs/sdks/webhooks/README.md#webhooks_delete) - Delete Webhook

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries. If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API. However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a `RetryConfig` object to the call:
```python
from agentmail import AgentmailCli
from agentmail.utils import BackoffStrategy, RetryConfig


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.inboxes_list(,
        RetryConfig("backoff", BackoffStrategy(1, 50, 1.1, 100), False))

    # Handle response
    print(res)

```

If you'd like to override the default retry strategy for all operations that support retries, you can use the `retry_config` optional parameter when initializing the SDK:
```python
from agentmail import AgentmailCli
from agentmail.utils import BackoffStrategy, RetryConfig


with AgentmailCli(
    retry_config=RetryConfig("backoff", BackoffStrategy(1, 50, 1.1, 100), False),
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.inboxes_list()

    # Handle response
    print(res)

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`AgentmailCliError`](./src/agentmail/models/errors/agentmailclierror.py) is the base class for all HTTP error responses. It has the following properties:

| Property           | Type             | Description                                                                             |
| ------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| `err.message`      | `str`            | Error message                                                                           |
| `err.status_code`  | `int`            | HTTP response status code eg `404`                                                      |
| `err.headers`      | `httpx.Headers`  | HTTP response headers                                                                   |
| `err.body`         | `str`            | HTTP body. Can be empty string if no body is returned.                                  |
| `err.raw_response` | `httpx.Response` | Raw HTTP response                                                                       |
| `err.data`         |                  | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```python
from agentmail import AgentmailCli, models


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:
    res = None
    try:

        res = agentmail_cli.inboxes.inboxes_create()

        # Handle response
        print(res)


    except models.errors.AgentmailCliError as e:
        # The base class for HTTP error responses
        print(e.message)
        print(e.status_code)
        print(e.body)
        print(e.headers)
        print(e.raw_response)

        # Depending on the method different errors may be thrown
        if isinstance(e, models.errors.ValidationErrorResponse):
            print(e.data.name)  # str
            print(e.data.errors)  # Any
```

### Error Classes
**Primary error:**
* [`AgentmailCliError`](./src/agentmail/models/errors/agentmailclierror.py): The base class for HTTP error responses.

<details><summary>Less common errors (7)</summary>

<br />

**Network errors:**
* [`httpx.RequestError`](https://www.python-httpx.org/exceptions/#httpx.RequestError): Base class for request errors.
    * [`httpx.ConnectError`](https://www.python-httpx.org/exceptions/#httpx.ConnectError): HTTP client was unable to make a request to a server.
    * [`httpx.TimeoutException`](https://www.python-httpx.org/exceptions/#httpx.TimeoutException): HTTP request timed out.


**Inherit from [`AgentmailCliError`](./src/agentmail/models/errors/agentmailclierror.py)**:
* [`ErrorResponse`](./src/agentmail/models/errors/errorresponse.py): . Applicable to 75 of 99 methods.*
* [`ValidationErrorResponse`](./src/agentmail/models/errors/validationerrorresponse.py): . Status code `400`. Applicable to 26 of 99 methods.*
* [`ResponseValidationError`](./src/agentmail/models/errors/responsevalidationerror.py): Type mismatch between the response data and the expected Pydantic model. Provides access to the Pydantic validation error via the `cause` attribute.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Python SDK makes API calls using the [httpx](https://www.python-httpx.org/) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with your own HTTP client instance.
Depending on whether you are using the sync or async version of the SDK, you can pass an instance of `HttpClient` or `AsyncHttpClient` respectively, which are Protocol's ensuring that the client has the necessary methods to make API calls.
This allows you to wrap the client with your own custom logic, such as adding custom headers, logging, or error handling, or you can just pass an instance of `httpx.Client` or `httpx.AsyncClient` directly.

For example, you could specify a header for every request that this sdk makes as follows:
```python
from agentmail import AgentmailCli
import httpx

http_client = httpx.Client(headers={"x-custom-header": "someValue"})
s = AgentmailCli(client=http_client)
```

or you could wrap the client with your own custom logic:
```python
from agentmail import AgentmailCli
from agentmail.httpclient import AsyncHttpClient
import httpx

class CustomClient(AsyncHttpClient):
    client: AsyncHttpClient

    def __init__(self, client: AsyncHttpClient):
        self.client = client

    async def send(
        self,
        request: httpx.Request,
        *,
        stream: bool = False,
        auth: Union[
            httpx._types.AuthTypes, httpx._client.UseClientDefault, None
        ] = httpx.USE_CLIENT_DEFAULT,
        follow_redirects: Union[
            bool, httpx._client.UseClientDefault
        ] = httpx.USE_CLIENT_DEFAULT,
    ) -> httpx.Response:
        request.headers["Client-Level-Header"] = "added by client"

        return await self.client.send(
            request, stream=stream, auth=auth, follow_redirects=follow_redirects
        )

    def build_request(
        self,
        method: str,
        url: httpx._types.URLTypes,
        *,
        content: Optional[httpx._types.RequestContent] = None,
        data: Optional[httpx._types.RequestData] = None,
        files: Optional[httpx._types.RequestFiles] = None,
        json: Optional[Any] = None,
        params: Optional[httpx._types.QueryParamTypes] = None,
        headers: Optional[httpx._types.HeaderTypes] = None,
        cookies: Optional[httpx._types.CookieTypes] = None,
        timeout: Union[
            httpx._types.TimeoutTypes, httpx._client.UseClientDefault
        ] = httpx.USE_CLIENT_DEFAULT,
        extensions: Optional[httpx._types.RequestExtensions] = None,
    ) -> httpx.Request:
        return self.client.build_request(
            method,
            url,
            content=content,
            data=data,
            files=files,
            json=json,
            params=params,
            headers=headers,
            cookies=cookies,
            timeout=timeout,
            extensions=extensions,
        )

s = AgentmailCli(async_client=CustomClient(httpx.AsyncClient()))
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Resource Management [resource-management] -->
## Resource Management

The `AgentmailCli` class implements the context manager protocol and registers a finalizer function to close the underlying sync and async HTTPX clients it uses under the hood. This will close HTTP connections, release memory and free up other resources held by the SDK. In short-lived Python programs and notebooks that make a few SDK method calls, resource management may not be a concern. However, in longer-lived programs, it is beneficial to create a single SDK instance via a [context manager][context-manager] and reuse it across the application.

[context-manager]: https://docs.python.org/3/reference/datamodel.html#context-managers

```python
from agentmail import AgentmailCli
def main():

    with AgentmailCli(
        bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
    ) as agentmail_cli:
        # Rest of application here...


# Or when using async:
async def amain():

    async with AgentmailCli(
        bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
    ) as agentmail_cli:
        # Rest of application here...
```
<!-- End Resource Management [resource-management] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass your own logger class directly into your SDK.
```python
from agentmail import AgentmailCli
import logging

logging.basicConfig(level=logging.DEBUG)
s = AgentmailCli(server_url="https://example.com", debug_logger=logging.getLogger("agentmail"))
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

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=agentmail&utm_campaign=python)
