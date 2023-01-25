# Colossal needle

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Description

Authorization server used by Colossal potato for authorization purposes.

## Prerequisite

You will need to install Docker, docker-compose / Docker Compose plugin & node in order to run this project

## Starting the project

### Set env variales

Add env variables in root of the project so docker can set the database correctly

```bash
MYSQL_DATABASE=app
MYSQL_USER=app
MYSQL_PASSWORD=app
MYSQL_HOST=db
MYSQL_ROOT_PASSWORD=root
MYSQL_TCP_PORT=3308

APP_PORT=5002
APP_NAME=Needle
APP_MAIN_ROUTE=hashes
```

`APP_NAME` is just used in app service and will be removed in the future.

`APP_MAIN_ROUTE` is to have dynamic main route for storing incoming hashes
and will likely be removed / replaced in the future.

### Docker

Start the project

```bash
docker compose up --build
```

api -> [localhost:5000](localhost:5000)
db -> localhost:3306

## Running npm commands from within the container

```bash
#
docker compose run --rm api <command>

# watch mode
docker compose run --rm api pnpm run start:dev

# production mode
docker compose run --rm api pnpm run start:prod
```

## Run test

```bash
# unit tests
docker compose run --rm api pnpm run test

# e2e tests
docker compose run --rm api pnpm run test:e2e

# test coverage
docker compose run --rm api pnpm run test:cov
```
