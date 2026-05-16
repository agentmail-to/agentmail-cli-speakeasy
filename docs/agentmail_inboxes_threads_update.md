## agentmail inboxes threads update

Update Thread

### Synopsis

Updates thread labels. Cannot add or remove system labels (sent, received, bounced, etc.). Rejects requests with a `422` for threads with 100 or more messages.

```
agentmail inboxes threads update [flags]
```

### Examples

```
  agentmail inboxes-threads update --inbox-id <id> --thread-id <id>
```

### Options

```
  -a, --add-labels string          Labels to add to thread. Cannot be system labels.
      --body string                Request body as JSON (alternative to individual flags). Can also be provided via stdin.
  -h, --help                       help for update
  -i, --inbox-id string            [required]
  -r, --remove-labels add_labels   Labels to remove from thread. Cannot be system labels. Takes priority over add_labels (in the event of duplicate labels passed in).
  -t, --thread-id string           [required]
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

* [agentmail inboxes threads](agentmail_inboxes_threads.md)	 - Operations for inboxes-threads
