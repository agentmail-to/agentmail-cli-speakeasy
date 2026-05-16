# RecordType

## Example Usage

```typescript
import { RecordType } from "agentmail/models/components";

let value: RecordType = "MX";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TXT" | "CNAME" | "MX" | Unrecognized<string>
```