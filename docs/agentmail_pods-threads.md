## agentmail pods-threads

Operations for pods-threads

### Synopsis

Operations for pods-threads

```
agentmail pods-threads [flags]
```

### Options

```
  -h, --help   help for pods-threads
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
* [agentmail pods-threads delete](agentmail_pods-threads_delete.md)	 - Delete Thread
* [agentmail pods-threads get](agentmail_pods-threads_get.md)	 - Get Thread
* [agentmail pods-threads get-attachment](agentmail_pods-threads_get-attachment.md)	 - Get Attachment
* [agentmail pods-threads list](agentmail_pods-threads_list.md)	 - List Threads
* [agentmail pods-threads update](agentmail_pods-threads_update.md)	 - Update Thread
