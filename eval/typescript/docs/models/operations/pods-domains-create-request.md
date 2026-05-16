# PodsDomainsCreateRequest

## Example Usage

```typescript
import { PodsDomainsCreateRequest } from "agentmail/models/operations";

let value: PodsDomainsCreateRequest = {
  podId: "<id>",
  body: {
    domain: "repentant-dividend.com",
    feedbackEnabled: true,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `podId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `body`                                                                             | [components.CreateDomainRequest](../../models/components/create-domain-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |