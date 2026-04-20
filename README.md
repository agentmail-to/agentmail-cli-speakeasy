# cli

Command-line interface for the *api* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=agentmail-cli&utm_campaign=cli)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)


<br /><br />
> [!IMPORTANT]
> This CLI is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/agentmail/agentmail). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [cli](#cli)
  * [CLI Installation](#cli-installation)
  * [Shell Completion](#shell-completion)
  * [CLI Example Usage](#cli-example-usage)
  * [Authentication](#authentication)
  * [Available Commands](#available-commands)
  * [Request Body Input](#request-body-input)
  * [Output Formats](#output-formats)
  * [Error Handling](#error-handling)
  * [Diagnostics](#diagnostics)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start CLI Installation [installation] -->
## CLI Installation

To install the CLI, use `go install`:
```bash
go install agentmail-cli/cmd/cli@latest
```

Or download a pre-built binary from the [releases page](https://agentmail-cli/releases) if available.
<!-- End CLI Installation [installation] -->

<!-- Start Shell Completion [completion] -->
## Shell Completion

Shell completions are available for Bash, Zsh, Fish, and PowerShell.

### Bash

```bash
# Add to ~/.bashrc:
source <(cli completion bash)

# Or install permanently:
cli completion bash > /etc/bash_completion.d/cli
```

### Zsh

```zsh
# Add to ~/.zshrc:
source <(cli completion zsh)

# Or install permanently:
cli completion zsh > "${fpath[1]}/_cli"
```

### Fish

```fish
cli completion fish | source

# Or install permanently:
cli completion fish > ~/.config/fish/completions/cli.fish
```

### PowerShell

```powershell
cli completion powershell | Out-String | Invoke-Expression
```
<!-- End Shell Completion [completion] -->

<!-- Start CLI Example Usage [usage] -->
## CLI Example Usage

### Example

```bash
cli inboxes list --bearer-auth 'Bearer test_token'

```
<!-- End CLI Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

Authentication credentials can be configured in four ways (in order of priority):

### 1. Command-line flags

Pass credentials directly as flags to any command:

```bash
cli --bearer-auth <value> <command> [arguments]
```

### 2. Environment variables

Set credentials via environment variables:

| Variable | Description |
|----------|-------------|
| `CLI_BEARER_AUTH` | HTTP Bearer |

### 3. OS Keychain (recommended for workstations)

Credentials are stored securely in your operating system's keychain when you run:

```bash
cli configure
```

Secret credentials (tokens, API keys, passwords) are automatically stored in:
- **macOS**: Keychain
- **Linux**: GNOME Keyring / KWallet (via D-Bus Secret Service)
- **Windows**: Windows Credential Locker

If no keychain is available (e.g., in CI environments), credentials fall back to the config file.

### 4. Configuration file

Run the interactive `configure` command to store non-secret settings:

```bash
cli configure
```

Configuration is stored in `~/.config/cli/config.yaml`.
<!-- End Authentication [security] -->

<!-- Start Available Commands [operations] -->
## Available Commands

<details open>
<summary>Available commands</summary>

### [inboxes](docs/cli_inboxes.md)

* [`list`](docs/cli_inboxes_list.md) - List Inboxes
* [`create`](docs/cli_inboxes_create.md) - Create Inbox
* [`get`](docs/cli_inboxes_get.md) - Get Inbox
* [`update`](docs/cli_inboxes_update.md) - Update Inbox
* [`delete`](docs/cli_inboxes_delete.md) - Delete Inbox

### [pods](docs/cli_pods.md)

* [`list`](docs/cli_pods_list.md) - List Pods
* [`create`](docs/cli_pods_create.md) - Create Pod
* [`get`](docs/cli_pods_get.md) - Get Pod
* [`delete`](docs/cli_pods_delete.md) - Delete Pod

### [webhooks](docs/cli_webhooks.md)

* [`list`](docs/cli_webhooks_list.md) - List Webhooks
* [`create`](docs/cli_webhooks_create.md) - Create Webhook
* [`get`](docs/cli_webhooks_get.md) - Get Webhook
* [`update`](docs/cli_webhooks_update.md) - Update Webhook
* [`delete`](docs/cli_webhooks_delete.md) - Delete Webhook

### [agent](docs/cli_agent.md)

* [`sign-up`](docs/cli_agent_sign-up.md) - Sign Up
* [`verify`](docs/cli_agent_verify.md) - Verify

### [API-keys](docs/cli_API-keys.md)

* [`api-keys-list`](docs/cli_API-keys_api-keys-list.md) - List API Keys
* [`api-keys-create`](docs/cli_API-keys_api-keys-create.md) - Create API Key
* [`api-keys-delete`](docs/cli_API-keys_api-keys-delete.md) - Delete API Key

### [domains](docs/cli_domains.md)

* [`list`](docs/cli_domains_list.md) - List Domains
* [`create`](docs/cli_domains_create.md) - Create Domain
* [`get`](docs/cli_domains_get.md) - Get Domain
* [`update`](docs/cli_domains_update.md) - Update Domain
* [`delete`](docs/cli_domains_delete.md) - Delete Domain
* [`get-zone-file`](docs/cli_domains_get-zone-file.md) - Get Zone File
* [`verify`](docs/cli_domains_verify.md) - Verify Domain

### [drafts](docs/cli_drafts.md)

* [`list`](docs/cli_drafts_list.md) - List Drafts
* [`get`](docs/cli_drafts_get.md) - Get Draft
* [`get-attachment`](docs/cli_drafts_get-attachment.md) - Get Attachment

### [inboxes-API-keys](docs/cli_inboxes-API-keys.md)

* [`inboxes-api-keys-list`](docs/cli_inboxes-API-keys_inboxes-api-keys-list.md) - List API Keys
* [`inboxes-api-keys-create`](docs/cli_inboxes-API-keys_inboxes-api-keys-create.md) - Create API Key
* [`inboxes-api-keys-delete`](docs/cli_inboxes-API-keys_inboxes-api-keys-delete.md) - Delete API Key

### [inboxes-drafts](docs/cli_inboxes-drafts.md)

* [`list`](docs/cli_inboxes-drafts_list.md) - List Drafts
* [`create`](docs/cli_inboxes-drafts_create.md) - Create Draft
* [`get`](docs/cli_inboxes-drafts_get.md) - Get Draft
* [`update`](docs/cli_inboxes-drafts_update.md) - Update Draft
* [`delete`](docs/cli_inboxes-drafts_delete.md) - Delete Draft
* [`get-attachment`](docs/cli_inboxes-drafts_get-attachment.md) - Get Attachment
* [`send`](docs/cli_inboxes-drafts_send.md) - Send Draft

### [inboxes-events](docs/cli_inboxes-events.md)

* [`list`](docs/cli_inboxes-events_list.md) - List Inbox Events

### [inboxes-lists](docs/cli_inboxes-lists.md)

* [`list`](docs/cli_inboxes-lists_list.md) - List Entries
* [`create`](docs/cli_inboxes-lists_create.md) - Create List Entry
* [`get`](docs/cli_inboxes-lists_get.md) - Get List Entry
* [`delete`](docs/cli_inboxes-lists_delete.md) - Delete List Entry

### [inboxes-messages](docs/cli_inboxes-messages.md)

* [`list`](docs/cli_inboxes-messages_list.md) - List Messages
* [`get`](docs/cli_inboxes-messages_get.md) - Get Message
* [`update`](docs/cli_inboxes-messages_update.md) - Update Message
* [`delete`](docs/cli_inboxes-messages_delete.md) - Delete Message
* [`get-attachment`](docs/cli_inboxes-messages_get-attachment.md) - Get Attachment
* [`get-raw`](docs/cli_inboxes-messages_get-raw.md) - Get Raw Message
* [`send`](docs/cli_inboxes-messages_send.md) - Send Message
* [`reply`](docs/cli_inboxes-messages_reply.md) - Reply To Message
* [`reply-all`](docs/cli_inboxes-messages_reply-all.md) - Reply All Message
* [`forward`](docs/cli_inboxes-messages_forward.md) - Forward Message

### [inboxes-metrics](docs/cli_inboxes-metrics.md)

* [`query`](docs/cli_inboxes-metrics_query.md) - Query Metrics

### [inboxes-threads](docs/cli_inboxes-threads.md)

* [`list`](docs/cli_inboxes-threads_list.md) - List Threads
* [`get`](docs/cli_inboxes-threads_get.md) - Get Thread
* [`update`](docs/cli_inboxes-threads_update.md) - Update Thread
* [`delete`](docs/cli_inboxes-threads_delete.md) - Delete Thread
* [`get-attachment`](docs/cli_inboxes-threads_get-attachment.md) - Get Attachment

### [lists](docs/cli_lists.md)

* [`list`](docs/cli_lists_list.md) - List Entries
* [`create`](docs/cli_lists_create.md) - Create List Entry
* [`get`](docs/cli_lists_get.md) - Get List Entry
* [`delete`](docs/cli_lists_delete.md) - Delete List Entry

### [metrics](docs/cli_metrics.md)

* [`query`](docs/cli_metrics_query.md) - Query Metrics

### [organizations](docs/cli_organizations.md)

* [`get`](docs/cli_organizations_get.md) - Get Organization

### [pods-API-keys](docs/cli_pods-API-keys.md)

* [`pods-api-keys-list`](docs/cli_pods-API-keys_pods-api-keys-list.md) - List API Keys
* [`pods-api-keys-create`](docs/cli_pods-API-keys_pods-api-keys-create.md) - Create API Key
* [`pods-api-keys-delete`](docs/cli_pods-API-keys_pods-api-keys-delete.md) - Delete API Key

### [pods-domains](docs/cli_pods-domains.md)

* [`list`](docs/cli_pods-domains_list.md) - List Domains
* [`create`](docs/cli_pods-domains_create.md) - Create Domain
* [`get`](docs/cli_pods-domains_get.md) - Get Domain
* [`update`](docs/cli_pods-domains_update.md) - Update Domain
* [`delete`](docs/cli_pods-domains_delete.md) - Delete Domain
* [`get-zone-file`](docs/cli_pods-domains_get-zone-file.md) - Get Zone File
* [`verify`](docs/cli_pods-domains_verify.md) - Verify Domain

### [pods-drafts](docs/cli_pods-drafts.md)

* [`list`](docs/cli_pods-drafts_list.md) - List Drafts
* [`get`](docs/cli_pods-drafts_get.md) - Get Draft
* [`get-attachment`](docs/cli_pods-drafts_get-attachment.md) - Get Attachment

### [pods-inboxes](docs/cli_pods-inboxes.md)

* [`list`](docs/cli_pods-inboxes_list.md) - List Inboxes
* [`create`](docs/cli_pods-inboxes_create.md) - Create Inbox
* [`get`](docs/cli_pods-inboxes_get.md) - Get Inbox
* [`update`](docs/cli_pods-inboxes_update.md) - Update Inbox
* [`delete`](docs/cli_pods-inboxes_delete.md) - Delete Inbox

### [pods-lists](docs/cli_pods-lists.md)

* [`list`](docs/cli_pods-lists_list.md) - List Entries
* [`create`](docs/cli_pods-lists_create.md) - Create List Entry
* [`get`](docs/cli_pods-lists_get.md) - Get List Entry
* [`delete`](docs/cli_pods-lists_delete.md) - Delete List Entry

### [pods-metrics](docs/cli_pods-metrics.md)

* [`query`](docs/cli_pods-metrics_query.md) - Query Metrics

### [pods-threads](docs/cli_pods-threads.md)

* [`list`](docs/cli_pods-threads_list.md) - List Threads
* [`get`](docs/cli_pods-threads_get.md) - Get Thread
* [`update`](docs/cli_pods-threads_update.md) - Update Thread
* [`delete`](docs/cli_pods-threads_delete.md) - Delete Thread
* [`get-attachment`](docs/cli_pods-threads_get-attachment.md) - Get Attachment

### [threads](docs/cli_threads.md)

* [`list`](docs/cli_threads_list.md) - List Threads
* [`get`](docs/cli_threads_get.md) - Get Thread
* [`update`](docs/cli_threads_update.md) - Update Thread
* [`delete`](docs/cli_threads_delete.md) - Delete Thread
* [`get-attachment`](docs/cli_threads_get-attachment.md) - Get Attachment

</details>
<!-- End Available Commands [operations] -->

<!-- Start Request Body Input [stdinpiping] -->
## Request Body Input

Operations that accept a request body support three input methods, with a clear priority chain:

### Individual flags (highest priority)

```bash
cli <command> --name "Jane" --age 30
```

### `--body` flag

Provide the entire request body as a JSON string:

```bash
cli <command> --body '{"name": "John", "age": 30}'
```

Individual flags override `--body` values:

```bash
# Result: {name: "Jane", age: 30}
cli <command> --body '{"name": "John", "age": 30}' --name "Jane"
```

### Stdin piping (lowest priority)

Pipe JSON into any command that accepts a request body:

```bash
echo '{"name": "John", "age": 30}' | cli <command>
```

Individual flags override stdin values:

```bash
# Result: {name: "Jane", age: 30}
echo '{"name": "John", "age": 30}' | cli <command> --name "Jane"
```

This is useful for chaining commands, reading from files, or scripting:

```bash
# Read body from a file
cli <command> < request.json

# Pipe from another command
curl -s https://example.com/data.json | cli <command>
```

### Priority

When multiple input methods are used, the priority is:

| Priority | Source | Description |
|----------|--------|-------------|
| 1 (highest) | Individual flags | `--name "Jane"` always wins |
| 2 | `--body` flag | Whole-body JSON via flag |
| 3 (lowest) | Stdin | Piped JSON input |
<!-- End Request Body Input [stdinpiping] -->

<!-- Start Output Formats [output-formats] -->
## Output Formats

Every command supports a `--output-format` flag that controls how the response is rendered to stdout.

### Available formats

| Format | Flag | Description |
|--------|------|-------------|
| Pretty | `--output-format pretty` (default) | Aligned key-value pairs with color, nested indentation. Human-readable at a glance. |
| JSON | `--output-format json` | JSON output. Passthrough when the response is already JSON (preserves original field order and numeric precision). Falls back to typed marshaling otherwise. |
| YAML | `--output-format yaml` | YAML output via standard marshaling. |
| Table | `--output-format table` | Tabular output for array responses. |
| TOON | `--output-format toon` | [Token-Oriented Object Notation](https://github.com/toon-format/spec) — a compact, line-oriented format that typically uses 30–60% fewer tokens than JSON. Well-suited for piping responses into LLM prompts. |

```bash
# Default pretty output
cli <command>

# Machine-readable JSON
cli <command> --output-format json

# TOON for LLM-friendly compact output
cli <command> --output-format toon

# Pipe JSON to jq without using --output-format
cli <command> --output-format json | jq '.fieldName'
```

### jq filtering

Use `--jq` to filter or transform the response inline using a [jq](https://jqlang.org) expression. This always outputs JSON and overrides `--output-format`:

```bash
# Extract a single field
cli <command> --jq '.name'

# Filter an array
cli <command> --jq '.items[] | select(.active == true)'
```

### Color control

Use `--color` to control terminal colors:

| Value | Behavior |
|-------|----------|
| `auto` (default) | Color when stdout is a TTY, plain text otherwise |
| `always` | Always colorize |
| `never` | Never colorize |

The `NO_COLOR` and `FORCE_COLOR` environment variables are also respected.

### Streaming and pagination

When using `--all` (pagination) or streaming operations, output is written incrementally as items arrive:

| Format | Streaming behavior |
|--------|-------------------|
| `json` | One compact JSON object per line ([NDJSON](https://github.com/ndjson/ndjson-spec)) |
| `yaml` | YAML documents separated by `---` |
| `toon` | One TOON-encoded object per block, separated by blank lines |
| `pretty` (default) | Pretty-printed items separated by blank lines |
<!-- End Output Formats [output-formats] -->

<!-- Start Error Handling [errors] -->
## Error Handling

The CLI uses standard exit codes to indicate success or failure:

| Exit Code | Meaning |
|-----------|---------|
| `0` | Success |
| `1` | Error (API error, invalid input, etc.) |

On success, the response data is printed to **stdout** as JSON. On failure, error details are printed to **stderr**.

```bash
# Capture output and handle errors
cli ... > output.json 2> error.log
if [ $? -ne 0 ]; then
  echo "Error occurred, see error.log"
fi
```
<!-- End Error Handling [errors] -->

<!-- Start Diagnostics [diagnostics] -->
## Diagnostics

The CLI includes two diagnostic flags available on all commands:

### Dry Run

Preview what would be sent without making any network calls:

```bash
cli <command> --dry-run
```

Output goes to stderr and includes:
- HTTP method and URL
- Request headers (sensitive values redacted)
- Request body preview (sensitive fields redacted)

The command exits successfully without contacting the API. This is useful for verifying request construction before executing.

### Debug

Log request and response diagnostics while running normally:

```bash
cli <command> --debug
```

Debug output goes to stderr and includes:
- Request method, URL, headers, and body preview
- Response status, headers, and body preview
- Transport errors (if any)

The command still executes normally and produces its regular output on stdout.

### Flag Precedence

If both `--dry-run` and `--debug` are set, `--dry-run` takes precedence and no network calls are made.

### Security

Sensitive information is automatically redacted in diagnostic output:
- **Headers**: `Authorization`, `Cookie`, `Set-Cookie`, `X-API-Key`, and other security headers show `[REDACTED]`
- **Body**: JSON fields named `password`, `secret`, `token`, `api_key`, `client_secret`, etc. show `[REDACTED]`

Diagnostic output should still be treated as potentially sensitive operational data.
<!-- End Diagnostics [diagnostics] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This CLI is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this CLI, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### CLI Created by [Speakeasy](https://www.speakeasy.com/?utm_source=agentmail-cli&utm_campaign=cli)
