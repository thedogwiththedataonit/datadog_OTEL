FROM python:3.9-slim
WORKDIR /flask_backend
COPY . .
RUN pip install -r ./requirements.txt

CMD ["ddtrace-run", "python3", "application.py"]

#docker build -t otel_python_app .
#docker tag otel_python_app:latest thomaspark034/otel_python_app:latest
#docker push thomaspark034/otel_python_app:latest