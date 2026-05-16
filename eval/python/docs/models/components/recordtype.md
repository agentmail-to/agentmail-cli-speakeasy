# RecordType

## Example Usage

```python
from agentmail.models.components import RecordType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: RecordType = "TXT"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"TXT"`
- `"CNAME"`
- `"MX"`
