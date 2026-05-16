# CreateDomainRequest

## Example Usage

```typescript
import { CreateDomainRequest } from "agentmail/models/components";

let value: CreateDomainRequest = {
  domain: "shimmering-majority.org",
  feedbackEnabled: false,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `domain`                                                     | *string*                                                     | :heavy_check_mark:                                           | The name of the domain (e.g., `example.com`).                |
| `feedbackEnabled`                                            | *boolean*                                                    | :heavy_check_mark:                                           | Bounce and complaint notifications are sent to your inboxes. |