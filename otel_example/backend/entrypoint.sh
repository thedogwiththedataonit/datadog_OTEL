#!/bin/sh
opentelemetry-instrument \
    --traces_exporter otlp \
    --metrics_exporter otlp \
    --service_name otel-python \
    --exporter_otlp_endpoint http://otel-collector:4317 \
    flask --app application run --port 5500 --host 0.0.0.0