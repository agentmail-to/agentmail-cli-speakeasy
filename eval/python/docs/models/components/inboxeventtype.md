# InboxEventType

Type of inbox event.

## Example Usage

```python
from agentmail.models.components import InboxEventType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: InboxEventType = "label_added"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"label_added"`
- `"label_removed"`
