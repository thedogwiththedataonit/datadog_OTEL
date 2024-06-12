## RUM <> TRACES <> LOGS

### Sending Python Traces with the datadog agent

replace the api key in the docker-compose.yaml

### To run the stack

#### Add Environment Variables in the docker-compose.yaml and then run the docker compose.

Then run in /python_tracing
```docker compose up --build```

#### Make sure to add the python log parser so we can extract the traceID and correlate traces with logs.