# EntryType

Whether the entry is an email address or domain.

## Example Usage

```typescript
import { EntryType } from "agentmail/models/components";

let value: EntryType = "domain";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"email" | "domain" | Unrecognized<string>
```