# Inboxes.Metrics

## Overview

### Available Operations

* [query](#query) - Query Metrics

## query

**CLI:**
```bash
agentmail inboxes:metrics query --inbox-id <inbox_id>
```

### Example Usage

<!-- UsageSnippet language="python" operationID="inboxes_metrics_query" method="get" path="/v0/inboxes/{inbox_id}/metrics" -->
```python
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.metrics.query(inbox_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `inbox_id`                                                                     | *str*                                                                          | :heavy_check_mark:                                                             | N/A                                                                            |
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