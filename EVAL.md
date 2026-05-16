# Speakeasy CLI Eval

Generated: 2026-04-20

Goal: evaluate Speakeasy as a CLI generator vs the existing Stainless-generated `agentmail-cli`.

## Try the TUI

Prereq: Go 1.25+ (`brew install go`).

```bash
git clone https://github.com/agentmail-to/agentmail-cli-speakeasy
cd agentmail-cli-speakeasy

# fastest: run without building
go run ./cmd/agentmail explore

# or build once, run many times
go build -o bin/agentmail ./cmd/agentmail
./bin/agentmail explore
```

Other things worth poking at:

```bash
./bin/agentmail --help                    # full command tree
./bin/agentmail configure                 # interactive auth setup (writes to OS keychain)
./bin/agentmail inboxes list --dry-run    # preview the request without sending
CLAUDE_CODE=1 ./bin/agentmail inboxes list --dry-run   # agent-mode auto-detection
./bin/agentmail completion zsh            # shell completion
```

The generated README's `go install` instructions won't work as-is because the Go module path is local (`agentmail-cli`), not a public GitHub path. Use `go run` or `go build` from the repo instead.

## SDK Eval: Speakeasy vs Fern

Speakeasy-generated SDKs now live under `eval/python/` and `eval/typescript/`. Compared against the current Fern-generated SDKs in `agentmail-docs/fern/generated/{python,typescript}`.

### File counts

|            | Fern | Speakeasy |
|------------|-----:|----------:|
| Python     |  303 |       239 |
| TypeScript |  661 |       344 |

Speakeasy's output is noticeably flatter — resources are one file each (`inboxes.py`, `inboxes-messages.ts`) instead of Fern's nested `api/resources/inboxes/resources/messages/client/Client.ts` structure.

### Python call sites

**Fern:**
```python
client.inboxes.messages.send(
    inbox_id,
    to="user@example.com",
    subject="Hi",
    text="Hello from my agent",
)
```

**Speakeasy:**
```python
client.inboxes_messages.inboxes_messages_send(
    inbox_id=inbox_id,
    to="user@example.com",
    subject="Hi",
    text="Hello from my agent",
)
```

Fern wins on ergonomics here. Speakeasy's `inboxes_messages.inboxes_messages_send` is the stutter you'd expect from tag-name-prefixed methods. Needs `removeStutter: true` or overlay work to clean up. Same root cause as the CLI's flat 31 command groups.

### TypeScript call sites

**Fern:**
```ts
await client.inboxes.messages.send(inboxId, {
    to: "user@example.com",
    subject: "Hi",
    text: "Hello from my agent",
})
```

**Speakeasy:**
```ts
await client.inboxesMessages.inboxesMessagesSend(inboxId, {
    to: "user@example.com",
    subject: "Hi",
    text: "Hello from my agent",
})
```

Same ergonomics gap as Python.

### What Speakeasy gives you that Fern doesn't

- **Sync + async in Python** — every method auto-generated with an `_async` variant (`inboxes_messages_send` + `inboxes_messages_send_async`). Fern's Python is sync-only in the current setup.
- **Per-call overrides** — `retries`, `server_url`, `timeout_ms`, `http_headers` accepted as kwargs on every method. Fern has `request_options` but not as granular.
- **Dual ESM/CJS TypeScript** with proper `moduleFormat: dual`, pre-built `dist/` ships ready.
- **MCP server generation** (`enableMCPServer: false` flag available, not enabled here).
- **React Query hooks** (`enableReactQuery: false`, also toggleable).
- **Webhooks** — first-class runtime support in generated SDKs, not just types.
- **Zod models** exported for TS.
- **Pre-generated docs** — both SDKs ship with USAGE.md, docs/, FUNCTIONS.md.

### What Fern gives you that Speakeasy doesn't (by default)

- **Cleaner method names** — `client.inboxes.messages.send()` vs `client.inboxes_messages.inboxes_messages_send()`
- **Namespaced client tree** — `client.inboxes.messages` is an actual nested object, not a flat resource
- **Branded types** — `InboxId`, `MessageSubject`, `MessageText` in Python; richer type info propagates
- **HttpResponsePromise pattern in TS** — lazy unwrapping, access raw response without re-firing
- **Raw client variants** (`raw_client.py` files) — escape hatch to raw HTTP without leaving the SDK

### Verdict for SDK eval

Speakeasy's SDKs are **more feature-rich** (async, MCP, React Query, webhook runtime, Zod) but **worse ergonomically** out of the box (tag-prefixed method names, flat resource access). Fern's output is closer to what a human would hand-write.

The stutter problem is the same root cause as the CLI's 31 top-level groups. Fixing it requires either overlays that rewrite tags (what we did for `APIKeys`) or a convention in Fern's tag naming. A systematic overlay that maps nested resource tags to cleaner method groupings would unlock most of the ergonomics gap.

Net: Speakeasy SDK eval is promising but not a drop-in replacement. Would require investment in overlays or config tuning to match Fern's call-site feel. The extra features (async, MCP, React Query) are real value if they align with roadmap.

## Setup

1. Created private repo `agentmail-to/agentmail-cli-speakeasy`
2. Exported OpenAPI spec from Fern: `fern export openapi.yaml` (208KB, 7535 lines)
3. Ran `speakeasy quickstart -s openapi.yaml -t cli -n AgentmailCli -p agentmail-cli -o .`
4. Ran `speakeasy run --auto-yes` to generate

## What Speakeasy Gives You Out-of-the-Box

Things the generated CLI ships with that our current Stainless CLI does not:

- **OS keychain integration** for credential storage (macOS Keychain, Windows Credential Locker, GNOME Keyring / KWallet via D-Bus). Credentials fall back to config file if no keychain is available (CI).
- **Interactive `configure` command** that walks you through auth setup and writes to keychain + config file.
- **Shell completions** for bash, zsh, fish, PowerShell — generated, not written.
- **Interactive prompting** when required flags are missing. Run `agentmail agent sign-up` with no args and it prompts.
- **Request body via stdin or `--body` flag** — pass full JSON, or use individual flags, whichever is easier.
- **Dry-run mode** (`--dry-run`) built in.
- **Server URL override** (`--server-url` or `--server <index>`) for testing against staging.
- **Cobra framework** — the de-facto Go CLI standard. Stainless uses `urfave/cli/v3`.
- **Per-command files** under `internal/cli/<group>/<command>.go` — easier to read and customize than monolithic generated files.
- **Shorthand flags** pulled from OpenAPI (e.g., `-u` for `--username`).
- **Structured output formats** — JSON, YAML, table, via `--output` flag.

## Auth Priority Order (Speakeasy)

1. Command-line flags (`--bearer-auth`)
2. Environment variables (`CLI_BEARER_AUTH`)
3. OS keychain (populated by `cli configure`)
4. Config file

## Command Structure Comparison

### Stainless (current)
```
agentmail inboxes list
agentmail inboxes create --display-name "My Inbox"
agentmail inboxes:messages send --inbox-id ... --to ... --subject ... --text ...
agentmail inboxes:threads list --inbox-id ...
```
Uses colons (`inboxes:messages`) for nested resources.

### Speakeasy (generated)
```
cli inboxes list --bearer-auth 'Bearer ...'
cli inboxes create
cli inboxes-messages send ...
cli agent sign-up --human-email ... --username ...
```
Flattens nested resources as separate top-level groups (`inboxes`, `inboxesmessages`, `inboxesthreads`, `podslists`, `podsinboxes`, etc.) — 31 top-level groups total.

## Issues / Caveats

1. **Binary name is `cli`** — Speakeasy uses the literal string "cli" as the binary name in generated examples and `go install` instructions. Needs customization (likely via `cliName` in `.speakeasy/gen.yaml`).
2. **Top-level group explosion** — 31 groups because nested resources got flattened (`podsapikeys`, `podsdomains`, `podsdrafts`, `inboxesdrafts`, `inboxeslists`, etc.). Stainless's colon notation is cleaner.
3. **Studio flags 111 improvements** — Speakeasy's Studio UI suggests fixes after generation. Worth running `speakeasy run --watch` to review.
4. **Warnings during generation:**
   - `nullable values are not supported in cli clients` (inboxes_create)
   - `validation warn: request body is optional for POST /v0/inboxes: did you mean to add required: true?`
5. **Compilation skipped** — Go is not installed locally. Need to install Go to actually build and test.
6. **Fern's OpenAPI export has quirks** — `title: api` and `version: ''` are empty. Speakeasy fell back to hoisting BearerAuth security since no global security was defined.

## Recommendation

Speakeasy wins on DX out-of-the-box:
- Keychain storage alone is a big quality-of-life win for developers. No more `export AGENTMAIL_API_KEY=...` in shell configs.
- Shell completion + interactive prompting = lower friction for first-time users.
- The `configure` command is the kind of polish we'd have to hand-write with Stainless.

But there are real costs:
- Command structure needs cleanup (31 flat groups vs Stainless's colon notation).
- Binary naming needs customization.
- Have to maintain a second generator pipeline.
- Fern → OpenAPI → Speakeasy is a 3-hop generation chain; any breakage in the middle cascades.

**Suggested next step:** install Go, build the binary, actually use it end-to-end (sign up, create inbox, send email) and compare the feel against the current CLI. The code quality is there — the real question is whether the DX wins justify maintaining two generators.

## Files Generated

```
.speakeasy/
├── gen.yaml          # generator config (can customize cliName, target version, etc.)
├── workflow.yaml     # generation workflow
└── out.openapi.yaml  # resolved openapi (after merging/overlays)
cmd/
├── cli/              # binary entry point
└── gendocs/          # docs generator
internal/
├── cli/              # 31 command groups
├── client/           # SDK client wrapper
├── config/           # config file + keychain
├── explorer/         # interactive TUI
├── flagutil/         # flag registration
├── interactive/      # interactive prompting
├── output/           # output formatters (json/yaml/table)
├── sdk/              # generated SDK (this is what powers the CLI)
└── usage/            # usage/help rendering
.goreleaser.yaml      # release pipeline (binary distribution)
README.md             # 17KB of usage docs
USAGE.md              # short example
go.mod
openapi.yaml          # exported from Fern
```
