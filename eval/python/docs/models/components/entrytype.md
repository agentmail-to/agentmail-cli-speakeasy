# EntryType

Whether the entry is an email address or domain.

## Example Usage

```python
from agentmail.models.components import EntryType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: EntryType = "email"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"email"`
- `"domain"`
