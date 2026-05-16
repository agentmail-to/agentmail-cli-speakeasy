## agentmail inboxes

Operations for inboxes

### Synopsis

Operations for inboxes

```
agentmail inboxes [flags]
```

### Options

```
  -h, --help   help for inboxes
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

* [agentmail](agentmail.md)	 - agentmail command-line interface
* [agentmail inboxes api-keys](agentmail_inboxes_api-keys.md)	 - Operations for inboxes-api-keys
* [agentmail inboxes create](agentmail_inboxes_create.md)	 - Create Inbox
* [agentmail inboxes delete](agentmail_inboxes_delete.md)	 - Delete Inbox
* [agentmail inboxes drafts](agentmail_inboxes_drafts.md)	 - Operations for inboxes-drafts
* [agentmail inboxes events](agentmail_inboxes_events.md)	 - Operations for events
* [agentmail inboxes get](agentmail_inboxes_get.md)	 - Get Inbox
* [agentmail inboxes list](agentmail_inboxes_list.md)	 - List Inboxes
* [agentmail inboxes lists](agentmail_inboxes_lists.md)	 - Operations for inboxes-lists
* [agentmail inboxes messages](agentmail_inboxes_messages.md)	 - Operations for messages
* [agentmail inboxes metrics](agentmail_inboxes_metrics.md)	 - Operations for inboxes-metrics
* [agentmail inboxes threads](agentmail_inboxes_threads.md)	 - Operations for inboxes-threads
* [agentmail inboxes update](agentmail_inboxes_update.md)	 - Update Inbox
