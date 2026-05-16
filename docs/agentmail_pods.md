## agentmail pods

Operations for pods

### Synopsis

Operations for pods

```
agentmail pods [flags]
```

### Options

```
  -h, --help   help for pods
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
* [agentmail pods api-keys](agentmail_pods_api-keys.md)	 - Operations for pods-api-keys
* [agentmail pods create](agentmail_pods_create.md)	 - Create Pod
* [agentmail pods delete](agentmail_pods_delete.md)	 - Delete Pod
* [agentmail pods domains](agentmail_pods_domains.md)	 - Operations for pods-domains
* [agentmail pods drafts](agentmail_pods_drafts.md)	 - Operations for pods-drafts
* [agentmail pods get](agentmail_pods_get.md)	 - Get Pod
* [agentmail pods inboxes](agentmail_pods_inboxes.md)	 - Operations for pods-inboxes
* [agentmail pods list](agentmail_pods_list.md)	 - List Pods
* [agentmail pods lists](agentmail_pods_lists.md)	 - Operations for pods-lists
* [agentmail pods metrics](agentmail_pods_metrics.md)	 - Operations for pods-metrics
* [agentmail pods threads](agentmail_pods_threads.md)	 - Operations for pods-threads
