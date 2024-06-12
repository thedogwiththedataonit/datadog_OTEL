FROM python:3.7
WORKDIR /flask_backend
COPY . .
RUN pip install -r ./requirements.txt
RUN chmod u+x ./entrypoint.sh

CMD ["./entrypoint.sh"]

#docker build -t otel_python_app .
#docker tag otel_python_app:latest thomaspark034/otel_python_app:latest
#docker push thomaspark034/otel_python_app:latest