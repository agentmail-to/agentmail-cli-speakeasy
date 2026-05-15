# agentmail-cli-speakeasy

Speakeasy-generated CLI for the [AgentMail API](https://agentmail.to).

This package is the **evaluation parallel** to [`agentmail-cli`](https://www.npmjs.com/package/agentmail-cli) (the production Stainless-generated CLI). It exists so we can compare Speakeasy's generator output side-by-side with the existing CLI. If you want the supported AgentMail CLI, install `agentmail-cli` instead.

## Install

```bash
npm install -g agentmail-cli-speakeasy
```

On install, the postinstall script downloads the matching native binary for your platform (macOS / Linux / Windows × x86_64 / arm64) from this repo's GitHub Releases.

## Usage

```bash
agentmail configure          # interactive: stores credentials in OS keychain
agentmail inboxes list
agentmail inboxes create
agentmail --help
```

See the [main README](https://github.com/agentmail-to/agentmail-cli-speakeasy) for full command reference.

## Source

- Repo: https://github.com/agentmail-to/agentmail-cli-speakeasy
- Releases: https://github.com/agentmail-to/agentmail-cli-speakeasy/releases
