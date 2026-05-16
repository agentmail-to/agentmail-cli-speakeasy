# DraftSendStatus

Schedule send status of draft.

## Example Usage

```typescript
import { DraftSendStatus } from "agentmail/models/components";

let value: DraftSendStatus = "scheduled";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"scheduled" | "sending" | "failed" | Unrecognized<string>
```