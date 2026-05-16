# Speakeasy vs Stainless for CLIs

A quick side-by-side, with a file you can open for each claim if you want to verify.

## What Speakeasy gives you for free

- **Your API key lives in the OS keychain.** Paste it once during `configure` and it goes into macOS Keychain (or GNOME Keyring on Linux, Credential Locker on Windows). Same store Safari uses for passwords. Every command after that just picks it up. No `export AGENTMAIL_API_KEY=...` in your `.zshrc`, no plaintext token sitting in a dotfile waiting to get committed. If there's no keychain available (CI, headless Linux), it falls back to `~/.config/agentmail/config.yaml` so nothing breaks.
  See: [`internal/config/keyring.go`](internal/config/keyring.go)

- **`agentmail configure` is an actual onboarding flow.** New user types it, gets a TUI form instead of a man page:

  ```
  ┌─ HTTP Bearer ────────────────────────┐
  │ ●●●●●●●●●●●●●●●●●                    │
  └──────────────────────────────────────┘
   Secret credentials stored in OS keychain
  ```

  So the happy path goes: install, run `agentmail configure`, paste the key, then `agentmail inboxes list` just works. Nobody has to dig through the README to find which env var name we settled on. (Heads up: distribution is wired up in `.goreleaser.yaml` for brew/scoop/apt, but we haven't published a tap yet, so today's install is still `go build` from the repo.)
  See: [`internal/cli/configure.go`](internal/cli/configure.go)

- **It prompts you for missing flags instead of yelling.** Run a command with nothing, it asks. Run it with half the flags, it asks for the rest. Stainless errors out and tells you to read `--help`.
  See: [`internal/interactive/`](internal/interactive/)

- **Shell completions are generated, not written.** Bash, zsh, fish, PowerShell, all four out of the box via Cobra's `completion` subcommand.
  See: [`cmd/agentmail/main.go`](cmd/agentmail/main.go)

- **One file per endpoint.** Each command lives in its own tiny file, which makes the generated code way easier to skim or patch than Stainless's chunky per-resource files.
  See: [`internal/cli/inboxes/inboxescreate.go`](internal/cli/inboxes/inboxescreate.go) vs Stainless's [`agentmail-cli/pkg/cmd/inbox.go`](../agentmail-cli/pkg/cmd/inbox.go)

- **`--output json|yaml|table` works everywhere.** Pick your format on any command. Nice when you're piping into `jq` or just reading by eye.
  See: [`internal/output/`](internal/output/)

- **`--dry-run` and `--server-url` are standard.** Preview what a command would send, or point it at staging, without writing wrapper scripts.
  See: [`internal/cli/root.go`](internal/cli/root.go)

- **`agentmail explore` opens a TUI for the whole API.** Browse endpoints, see params, try calls. Genuinely fun to poke at.
  See: [`internal/explorer/`](internal/explorer/)

## What Stainless does better

- **Cleaner command names.** Stainless gives you `inboxes:messages send`. Speakeasy gives you 31 flat top-level groups because it can't represent nested resources, so you end up with `inboxesmessages`, `podsapikeys`, `podsdomains`, on and on.
  See: [`agentmail-cli/pkg/cmd/inboxmessage.go`](../agentmail-cli/pkg/cmd/inboxmessage.go) vs [`internal/cli/`](internal/cli/) (just count the directories)

- **Custom helper packages we can actually reach into.** Stainless has our own packages for form encoding, query encoding, binary params, all editable. Speakeasy's runtime is a generated SDK we don't really touch.
  See: [`agentmail-cli/internal/apiform/`](../agentmail-cli/internal/apiform/), [`agentmail-cli/internal/apiquery/`](../agentmail-cli/internal/apiquery/)

- **Fuzzy "did you mean" suggestions.** Typo `agentmail inbxoes`, get a helpful suggestion back. Hand-written, but nice.
  See: [`agentmail-cli/internal/autocomplete/autocomplete.go`](../agentmail-cli/internal/autocomplete/autocomplete.go), [`agentmail-cli/pkg/cmd/suggest.go`](../agentmail-cli/pkg/cmd/suggest.go)

- **Tests next to every resource.** Speakeasy's generated CLI has none.
  See: [`agentmail-cli/pkg/cmd/inbox_test.go`](../agentmail-cli/pkg/cmd/inbox_test.go)

- **Release-please is wired in.** Automated CHANGELOG and version bumps as part of the pipeline.
  See: [`agentmail-cli/release-please-config.json`](../agentmail-cli/release-please-config.json)

- **One fewer hop in the generation chain.** Stainless reads our Fern spec directly. Speakeasy needs Fern → exported OpenAPI → Speakeasy, which is three hops and three places things can quietly break.
  See setup notes in [`EVAL.md`](EVAL.md#setup)

## So which one

Speakeasy genuinely wins on first-run developer experience. The keychain bit alone is the kind of polish people notice on day one. But the command tree it ships is rough: 31 flat groups, stuttery names like `inboxesmessages inboxesmessagessend`, and no obvious fix without writing a pile of overlays.

Stainless gives us a cleaner structure today, but every bit of polish (configure flow, completions, suggestions) we had to build ourselves or skip.

So the real question isn't "which generator is better." It's "is the keychain plus interactive setup worth maintaining a parallel Fern → OpenAPI → Speakeasy pipeline and spending real time on overlays to fix the flat-group problem?" Right now I think the answer is no. Full reasoning in [`EVAL.md`](EVAL.md#recommendation).
