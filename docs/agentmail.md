## agentmail

agentmail command-line interface

### Synopsis

Command-line interface for agentmail

```
agentmail [flags]
```

### Options

```
      --agent-mode             Enable structured errors and default TOON output for AI coding agents. Automatically enabled when a known agent environment is detected (CLAUDE_CODE, CURSOR_AGENT, etc.). Use --agent-mode=false to disable.
      --bearer-auth string     HTTP Bearer
      --color string           Control colored output: auto (color when output is a TTY), always, or never. Respects NO_COLOR and FORCE_COLOR env vars. (default "auto")
  -d, --debug                  Log request and response diagnostics to stderr
      --dry-run                Preview the request that would be sent without executing it (output to stderr)
  -H, --header stringArray     Set a custom HTTP request header (format: "Key: Value"). Can be specified multiple times.
  -h, --help                   help for agentmail
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

* [agentmail agent](agentmail_agent.md)	 - Operations for agent
* [agentmail api-keys](agentmail_api-keys.md)	 - Operations for api-keys
* [agentmail auth](agentmail_auth.md)	 - Manage authentication credentials
* [agentmail configure](agentmail_configure.md)	 - Configure authentication credentials and preferences
* [agentmail domains](agentmail_domains.md)	 - Operations for domains
* [agentmail drafts](agentmail_drafts.md)	 - Operations for drafts
* [agentmail explore](agentmail_explore.md)	 - Interactively browse and run commands
* [agentmail inboxes](agentmail_inboxes.md)	 - Operations for inboxes
* [agentmail lists](agentmail_lists.md)	 - Operations for lists
* [agentmail metrics](agentmail_metrics.md)	 - Operations for metrics
* [agentmail organizations](agentmail_organizations.md)	 - Operations for organizations
* [agentmail pods](agentmail_pods.md)	 - Operations for pods
* [agentmail threads](agentmail_threads.md)	 - Operations for threads
* [agentmail version](agentmail_version.md)	 - Print the CLI version
* [agentmail webhooks](agentmail_webhooks.md)	 - Operations for webhooks
* [agentmail whoami](agentmail_whoami.md)	 - Display current authentication configuration
