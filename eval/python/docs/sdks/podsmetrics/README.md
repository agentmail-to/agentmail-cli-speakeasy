# Pods.Metrics

## Overview

### Available Operations

* [query](#query) - Query Metrics

## query

**CLI:**
```bash
agentmail pods:metrics query --pod-id <pod_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="pods_metrics_query" method="get" path="/v0/pods/{pod_id}/metrics" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.pods.metrics.query(pod_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `pod_id`                                                                       | *str*                                                                          | :heavy_check_mark:                                                             | N/A                                                                            |
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