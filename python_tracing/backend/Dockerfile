#!/bin/sh

FROM python:3.7
WORKDIR /flask_backend
COPY requirements.txt /flask_backend/requirements.txt 
RUN pip3 install -r requirements.txt
COPY . .
ENV FLASK_APP=application.py
ENV PORT=5500
EXPOSE 5500

RUN opentelemetry-bootstrap --action=install

#otel env
RUN echo '#!/bin/sh\nopentelemetry-instrument --traces_exporter console,otlp --metrics_exporter console --service_name otel_flask  --exporter_otlp_endpoint 0.0.0.0:4318 python3 application.py' > /entrypoint.sh && \
    chmod +x /entrypoint.sh



CMD ["/entrypoint.sh"]


#docker tag otel_python_app:latest thomaspark034/otel_python_app:latest
#docker push thomaspark034/otel_python_app:latest