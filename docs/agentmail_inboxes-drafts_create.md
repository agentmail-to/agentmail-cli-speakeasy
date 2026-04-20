## agentmail inboxes-drafts create

Create Draft

### Synopsis

**CLI:**
```bash
agentmail inboxes:drafts create --inbox-id <inbox_id> --to recipient@example.com --subject "Draft subject" --text "Draft body"
```

```
agentmail inboxes-drafts create [flags]
```

### Examples

```
  agentmail inboxes-drafts create --inbox-id <id>
```

### Options

```
  -a, --attachments string             Attachments to include in draft.
  -b, --bcc username@domain.com        Addresses of BCC recipients. In format username@domain.com or `Display Name <username@domain.com>`.
      --body string                    Request body as JSON (alternative to individual flags). Can also be provided via stdin.
      --cc username@domain.com         Addresses of CC recipients. In format username@domain.com or `Display Name <username@domain.com>`.
      --client-id string               Client ID of draft.
  -h, --help                           help for create
      --html string                    HTML body of draft.
      --in-reply-to string             ID of message being replied to.
      --inbox-id string                [required]
  -l, --labels stringArray             Labels of draft.
  -r, --reply-to username@domain.com   Reply-to addresses. In format username@domain.com or `Display Name <username@domain.com>`.
      --send-at string                 Time at which to schedule send draft.
      --subject string                 Subject of draft.
      --text string                    Plain text body of draft.
      --to username@domain.com         Addresses of recipients. In format username@domain.com or `Display Name <username@domain.com>`.
```

### Options inherited from parent commands

```
      --agent-mode             Enable structured errors and default TOON output for AI coding agents. Automatically enabled when a known agent environment is detected (CLAUDE_CODE, CURSOR_AGENT, etc.). Use --agent-mode=false to disable.
      --bearer-auth string     HTTP Bearer
      --color string           Control colored output: auto (color when output is a TTY), always, or never. Respects NO_COLOR and FORCE_COLOR env vars. (default "auto")
  -d, --debug                  Log request and response diagnostics to stderr
      --dry-run                Preview the request that would be sent without executing it (output to stderr)
  -H, --header stringArray     Set a custom HTTP request header (format: "Key: Value"). Can be specified multiple times.
      --include-headers        Include HTTP response headers in the output
  -q, --jq string              Filter and transform output using a jq expression (e.g., '.name', '.items[] | .id')
      --no-interactive         Disable all interactive features (auto-prompting, explorer auto-launch, TUI forms)
  -o, --output-format string   Specify the output format. Options: pretty, json, yaml, table, toon. (default "pretty")
      --server string          Select a server by index (for indexed servers) or name (for named servers)
      --server-url string      Override the default server URL
      --timeout string         HTTP request timeout (e.g., 30s, 5m, 100ms)
      --usage                  Print the CLI Usage schema in KDL format
```

### SEE ALSO

* [agentmail inboxes-drafts](agentmail_inboxes-drafts.md)	 - Operations for inboxes-drafts
