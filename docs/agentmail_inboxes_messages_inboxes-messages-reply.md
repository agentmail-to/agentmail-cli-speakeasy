## agentmail inboxes messages inboxes-messages-reply

Reply To Message

### Synopsis

**CLI:**
```bash
agentmail inboxes:messages reply --inbox-id <inbox_id> --message-id <message_id> --text "Reply text"
```

```
agentmail inboxes messages inboxes-messages-reply [flags]
```

### Examples

```
  agentmail messages inboxes-messages-reply --inbox-id <id> --message-id <id>
```

### Options

```
  -a, --attachments string   Attachments to include in message.
  -b, --bcc string           JSON value (one of: string | array of string)
      --body string          Request body as JSON (alternative to individual flags). Can also be provided via stdin.
  -c, --cc string            JSON value (one of: string | array of string)
      --headers string       Headers to include in message.
  -h, --help                 help for inboxes-messages-reply
      --html string          HTML body of message.
  -i, --inbox-id string      [required]
  -l, --labels stringArray   Labels of message.
  -m, --message-id string    [required]
      --reply-all            Reply to all recipients of the original message.
      --reply-to string      JSON value (one of: string | array of string)
      --text string          Plain text body of message.
      --to string            JSON value (one of: string | array of string)
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

* [agentmail inboxes messages](agentmail_inboxes_messages.md)	 - Operations for messages
