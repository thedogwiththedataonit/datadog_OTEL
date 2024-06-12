### Sending Python Traces with OTEL

application.py is hosted on localhost port 5500 and is auto instrumented with OTELs SDK.

application.py has a route called /rolldice which picks a random number from 1-6.

A frontend react app calls /rolldice and has Datadogs RUM instrumented with:
```
...
    allowedTracingUrls: [
      {
        match: `http://localhost:5500`,
        propagatorTypes: ["tracecontext"],
    }]
```

### To run the stack

#### Add Environment Variables by creating .env.local in the following directories. Use the .env.examples as example for what env variables are needed.
/otel-collector/.env.local --> Add DD_API_KEY
/frontend/.env.local --> REACT_APP_APP_ID and REACT_APP_CLIENT_TOKEN

Then run in /python_tracing
```docker compose up --build```