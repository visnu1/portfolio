FROM alpine:latest

RUN apk add --no-cache python3 py3-pip

RUN python3 -m venv /venv

RUN /venv/bin/pip install --no-cache-dir httpserver

COPY ./out /usr/share/portfolio

ENV PATH="/venv/bin:$PATH"

CMD ["python3", "-m", "http.server", "8081", "--directory", "/usr/share/portfolio"]
