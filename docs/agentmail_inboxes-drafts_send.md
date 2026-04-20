## agentmail inboxes-drafts send

Send Draft

### Synopsis

**CLI:**
```bash
agentmail inboxes:drafts send --inbox-id <inbox_id> --draft-id <draft_id>
```

```
agentmail inboxes-drafts send [flags]
```

### Examples

```
  agentmail inboxes-drafts send --inbox-id <id> --draft-id <id>
```

### Options

```
  -a, --add-labels string      JSON value (one of: string | array of string)
      --body string            Request body as JSON (alternative to individual flags). Can also be provided via stdin.
      --draft-id string        [required]
  -h, --help                   help for send
  -i, --inbox-id string        [required]
  -r, --remove-labels string   JSON value (one of: string | array of string)
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
