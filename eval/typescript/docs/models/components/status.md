# Status

## Example Usage

```typescript
import { Status } from "agentmail/models/components";

let value: Status = "FAILED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NOT_STARTED" | "PENDING" | "INVALID" | "FAILED" | "VERIFYING" | "VERIFIED" | Unrecognized<string>
```