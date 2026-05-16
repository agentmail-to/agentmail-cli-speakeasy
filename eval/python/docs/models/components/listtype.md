# ListType

Type of list entry.

## Example Usage

```python
from agentmail.models.components import ListType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: ListType = "allow"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"allow"`
- `"block"`
