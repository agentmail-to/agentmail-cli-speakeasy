## agentmail pods-domains

Operations for pods-domains

### Synopsis

Operations for pods-domains

```
agentmail pods-domains [flags]
```

### Options

```
  -h, --help   help for pods-domains
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
* [agentmail pods-domains create](agentmail_pods-domains_create.md)	 - Create Domain
* [agentmail pods-domains delete](agentmail_pods-domains_delete.md)	 - Delete Domain
* [agentmail pods-domains get](agentmail_pods-domains_get.md)	 - Get Domain
* [agentmail pods-domains get-zone-file](agentmail_pods-domains_get-zone-file.md)	 - Get Zone File
* [agentmail pods-domains list](agentmail_pods-domains_list.md)	 - List Domains
* [agentmail pods-domains update](agentmail_pods-domains_update.md)	 - Update Domain
* [agentmail pods-domains verify](agentmail_pods-domains_verify.md)	 - Verify Domain
