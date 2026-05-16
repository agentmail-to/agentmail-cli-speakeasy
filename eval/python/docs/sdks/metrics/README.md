# Metrics

## Overview

### Available Operations

* [metrics_query](#metrics_query) - Query Metrics

## metrics_query

**CLI:**
```bash
agentmail metrics list
```

### Example Usage

<!-- UsageSnippet language="python" operationID="metrics_query" method="get" path="/v0/metrics" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.metrics.metrics_query()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `event_types`                                                                  | List[[components.MetricEventType](../../models/components/metriceventtype.md)] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `start`                                                                        | [date](https://docs.python.org/3/library/datetime.html#date-objects)           | :heavy_minus_sign:                                                             | N/A                                                                            |
| `end`                                                                          | [date](https://docs.python.org/3/library/datetime.html#date-objects)           | :heavy_minus_sign:                                                             | N/A                                                                            |
| `period`                                                                       | *Optional[str]*                                                                | :heavy_minus_sign:                                                             | N/A                                                                            |
| `limit`                                                                        | *Optional[int]*                                                                | :heavy_minus_sign:                                                             | N/A                                                                            |
| `descending`                                                                   | *Optional[bool]*                                                               | :heavy_minus_sign:                                                             | N/A                                                                            |
| `retries`                                                                      | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)               | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `server_url`                                                                   | *Optional[str]*                                                                | :heavy_minus_sign:                                                             | An optional server URL to use.                                                 |

### Response

**[Dict[str, List[models.components.MetricBucket]]](../../models/.md)**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| models.errors.ValidationErrorResponse  | 400                                    | application/json                       |
| models.errors.AgentmailCliDefaultError | 4XX, 5XX                               | \*/\*                                  |