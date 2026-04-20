# Speakeasy CLI Eval

Generated: 2026-04-20

Goal: evaluate Speakeasy as a CLI generator vs the existing Stainless-generated `agentmail-cli`.

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
