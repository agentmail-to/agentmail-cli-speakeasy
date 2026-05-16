# EventType

## Example Usage

```python
from agentmail.models.components import EventType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: EventType = "message.received"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"message.received"`
- `"message.received.spam"`
- `"message.received.blocked"`
- `"message.sent"`
- `"message.delivered"`
- `"message.bounced"`
- `"message.complained"`
- `"message.rejected"`
- `"domain.verified"`
