# Berth Reservation UI

[![Build Status](https://travis-ci.com/City-of-Helsinki/berth-reservations-admin.svg?branch=develop)](https://travis-ci.com/City-of-Helsinki/berth-reservations-admin) [![Codecov](https://codecov.io/gh/City-of-Helsinki/berth-reservations-admin/branch/develop/graph/badge.svg)](https://codecov.io/gh/City-of-Helsinki/berth-reservations-admin/branch/develop/graph/badge.svg) [![GitHub issues](https://img.shields.io/github/issues/City-of-Helsinki/berth-reservations-admin)](https://img.shields.io/github/issues/City-of-Helsinki/berth-reservations-admin) [![GitHub forks](https://img.shields.io/github/forks/City-of-Helsinki/berth-reservations-admin)](https://img.shields.io/github/forks/City-of-Helsinki/berth-reservations-admin) [![GitHub license](https://img.shields.io/github/license/City-of-Helsinki/berth-reservations-admin)](https://img.shields.io/github/license/City-of-Helsinki/berth-reservations-admin)


## Prerequisites

- Node.js 12.x and yarn, or Docker and docker.compose
- Recommended editor for this project is VSCode.


### Setup

After cloning this repository, create a new `.env.local` file from the provided `.env.example` file and configure it as needed:

```
$ cp .env.example .env.development.local
```

## Development

To start development environment, run:

```
$ yarn start
```

This will start [the application](http://localhost:3000) on port `3000`.

To only start the storybook on port `6006`:

```
$ yarn storybook
```

### Starting dockerized development environment

1. Check if Docker and docker CLI installed, port `3000` is free, not occupied by running server.

2. Make sure you have env variables in `.env.development.local`, otherwise extend it from example by:
   ```
   $ cp .env.example .env.development.local
   ```
3. Start building docker image and start container:
   ```
   $ docker-compose up
   ```
4. Open `localhost:3000` on browser.

## Testing

To run tests:

```
$ yarn test
```

## Useful docker command

- To rebuild the docker images:
  ```
  $ docker-compose up --force-recreate --build
  ```
- To enter inside docker container environment:
  ```
  $ docker-compose exec app sh
  ```
- Remove docker container if needed:
  ```
  $ docker rm -f berth-reservation-admin
  ```
- Remove docker image:
  ```
  $ docker rmi berth-reservations-admin_app
  ```
- Running command inside Docker environment (test for example):
  (Make sure docker container is running)
  `$ docker-compose run app YOUR_COMMAND_HERE`
- Encounter `node-sass` issue ? try to go inside docker container environment and run `npm rebuild node-sass`
