FROM alpine:latest

RUN apk add --no-cache python3 py3-pip && pip install --no-cache-dir httpserver

COPY ./out /usr/share/portfolio

EXPOSE 8081

CMD ["python3", "-m", "http.server", "8081", "--directory", "/usr/share/portfolio"]
