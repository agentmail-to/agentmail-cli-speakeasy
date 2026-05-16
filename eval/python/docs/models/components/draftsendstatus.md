# DraftSendStatus

Schedule send status of draft.

## Example Usage

```python
from agentmail.models.components import DraftSendStatus

# Open enum: unrecognized values are captured as UnrecognizedStr
value: DraftSendStatus = "scheduled"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"scheduled"`
- `"sending"`
- `"failed"`
