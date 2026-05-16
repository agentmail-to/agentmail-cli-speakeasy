# AttachmentContentDisposition

Content disposition of attachment.

## Example Usage

```python
from agentmail.models.components import AttachmentContentDisposition

# Open enum: unrecognized values are captured as UnrecognizedStr
value: AttachmentContentDisposition = "inline"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"inline"`
- `"attachment"`
