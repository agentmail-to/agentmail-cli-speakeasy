# Direction

Direction of list entry.

## Example Usage

```python
from agentmail.models.components import Direction

# Open enum: unrecognized values are captured as UnrecognizedStr
value: Direction = "send"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"send"`
- `"receive"`
- `"reply"`
