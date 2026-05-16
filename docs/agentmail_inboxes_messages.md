## agentmail inboxes messages

Operations for messages

### Synopsis

Operations for messages

```
agentmail inboxes messages [flags]
```

### Options

```
  -h, --help   help for messages
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

* [agentmail inboxes](agentmail_inboxes.md)	 - Operations for inboxes
* [agentmail inboxes messages inboxes-messages-delete](agentmail_inboxes_messages_inboxes-messages-delete.md)	 - Delete Message
* [agentmail inboxes messages inboxes-messages-forward](agentmail_inboxes_messages_inboxes-messages-forward.md)	 - Forward Message
* [agentmail inboxes messages inboxes-messages-get](agentmail_inboxes_messages_inboxes-messages-get.md)	 - Get Message
* [agentmail inboxes messages inboxes-messages-get-attachment](agentmail_inboxes_messages_inboxes-messages-get-attachment.md)	 - Get Attachment
* [agentmail inboxes messages inboxes-messages-get-raw](agentmail_inboxes_messages_inboxes-messages-get-raw.md)	 - Get Raw Message
* [agentmail inboxes messages inboxes-messages-list](agentmail_inboxes_messages_inboxes-messages-list.md)	 - List Messages
* [agentmail inboxes messages inboxes-messages-reply](agentmail_inboxes_messages_inboxes-messages-reply.md)	 - Reply To Message
* [agentmail inboxes messages inboxes-messages-reply-all](agentmail_inboxes_messages_inboxes-messages-reply-all.md)	 - Reply All Message
* [agentmail inboxes messages inboxes-messages-send](agentmail_inboxes_messages_inboxes-messages-send.md)	 - Send Message
* [agentmail inboxes messages inboxes-messages-update](agentmail_inboxes_messages_inboxes-messages-update.md)	 - Update Message
