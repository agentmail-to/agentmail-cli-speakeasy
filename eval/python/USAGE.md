<!-- Start SDK Example Usage [usage] -->
```python
# Synchronous Example
from agentmail import AgentmailCli


with AgentmailCli(
    bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
) as agentmail_cli:

    res = agentmail_cli.inboxes.inboxes_list()

    # Handle response
    print(res)
```

</br>

The same SDK client can also be used to make asynchronous requests by importing asyncio.

```python
# Asynchronous Example
from agentmail import AgentmailCli
import asyncio

async def main():

    async with AgentmailCli(
        bearer_auth="<YOUR_BEARER_TOKEN_HERE>",
    ) as agentmail_cli:

        res = await agentmail_cli.inboxes.inboxes_list_async()

        # Handle response
        print(res)

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->