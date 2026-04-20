## agentmail inboxes-messages reply-all

Reply All Message

### Synopsis

**CLI:**
```bash
agentmail inboxes:messages reply-all --inbox-id <inbox_id> --message-id <message_id> --text "Reply text"
```

```
agentmail inboxes-messages reply-all [flags]
```

### Examples

```
  agentmail inboxes-messages reply-all --inbox-id <id> --message-id <id>
```

### Options

```
  -a, --attachments string   Attachments to include in message.
      --body string          Request body as JSON (alternative to individual flags). Can also be provided via stdin.
      --headers string       Headers to include in message.
  -h, --help                 help for reply-all
      --html string          HTML body of message.
  -i, --inbox-id string      [required]
  -l, --labels stringArray   Labels of message.
  -m, --message-id string    [required]
  -r, --reply-to string      JSON value (one of: string | array of string)
  -t, --text string          Plain text body of message.
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

* [agentmail inboxes-messages](agentmail_inboxes-messages.md)	 - Operations for inboxes-messages
