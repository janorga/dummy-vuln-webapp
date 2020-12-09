## Description

This is a dummy vulnerable web app built for checking and testing SQL easy injection attacks and XSS.

Docker Engine is required. Docker install instructions: https://docs.docker.com/engine/install/ubuntu/
Docker Compose ise required. Docker Compose install instructions: https://docs.docker.com/compose/install/

Default listening port is TCP 80.

## Deploy instructions
```console
git clone https://github.com/janorga/dummy-vuln-webapp.git
cd dummy-vuln-webapp
docker-compose up -d
```