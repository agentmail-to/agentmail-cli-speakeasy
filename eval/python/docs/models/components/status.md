# Status

## Example Usage

```python
from agentmail.models.components import Status

# Open enum: unrecognized values are captured as UnrecognizedStr
value: Status = "NOT_STARTED"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"NOT_STARTED"`
- `"PENDING"`
- `"INVALID"`
- `"FAILED"`
- `"VERIFYING"`
- `"VERIFIED"`
