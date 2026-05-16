# EventType

## Example Usage

```typescript
import { EventType } from "agentmail/models/components";

let value: EventType = "message.sent";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"message.received" | "message.received.spam" | "message.received.blocked" | "message.sent" | "message.delivered" | "message.bounced" | "message.complained" | "message.rejected" | "domain.verified" | Unrecognized<string>
```