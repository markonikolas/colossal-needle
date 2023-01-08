<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="50" alt="Nest Logo" /></a>
</p>

# Colossal needle

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
MYSQL_HOST=localhost
MYSQL_ROOT_PASSWORD=approot
```

### Docker

Start the project

```bash
docker-compose up --build
```

or

```bash
docker compose up --build
```

api -> [localhost:5000](localhost:5000)
db -> localhost:3306

## Running the app

```bash
# general
$ docker compose run --rm api <command>

# watch mode
$ docker compose run --rm api pnpm run start:dev

# production mode
$ docker compose run --rm api pnpm run start:prod
```

## Test

```bash
# unit tests
$ docker compose run --rm api pnpm run test

# e2e tests
$ docker compose run --rm api pnpm run test:e2e

# test coverage
$ docker compose run --rm api pnpm run test:cov
```
