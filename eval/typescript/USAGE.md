<!-- Start SDK Example Usage [usage] -->
```typescript
import { AgentmailCli } from "agentmail";

const agentmailCli = new AgentmailCli({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await agentmailCli.inboxes.inboxesList();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->