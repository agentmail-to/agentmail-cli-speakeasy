# PodsDomainsUpdateRequest

## Example Usage

```typescript
import { PodsDomainsUpdateRequest } from "agentmail/models/operations";

let value: PodsDomainsUpdateRequest = {
  podId: "<id>",
  domainId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `podId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `domainId`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `body`                                                                             | [components.UpdateDomainRequest](../../models/components/update-domain-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |