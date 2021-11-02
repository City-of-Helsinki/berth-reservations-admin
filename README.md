# Berth Reservation Admin

[![CI status](https://github.com/City-of-Helsinki/berth-reservations-admin/workflows/CI/badge.svg)](https://github.com/City-of-Helsinki/berth-reservations-admin/actions?query=workflow%3ACI)
[![Browser Tests status](https://github.com/City-of-Helsinki/berth-reservations-admin/workflows/Browser%20Tests/badge.svg)](https://github.com/City-of-Helsinki/berth-reservations-admin/actions?query=workflow%3A%22Browser+Tests%22)
[![Codecov](https://codecov.io/gh/City-of-Helsinki/berth-reservations-admin/branch/develop/graph/badge.svg)](https://codecov.io/gh/City-of-Helsinki/berth-reservations-admin/branch/develop/graph/badge.svg)
[![Dependency Status](https://img.shields.io/david/City-of-Helsinki/berth-reservations-admin?branch=develop)](https://img.shields.io/david/City-of-Helsinki/berth-reservations-admin?branch=develop)
[![devDependencies Status](https://david-dm.org/city-of-helsinki/berth-reservations-admin/dev-status.svg?branch=develop)](https://david-dm.org/city-of-helsinki/berth-reservations-admin?type=dev&branch=develop)
[![GitHub license](https://img.shields.io/github/license/City-of-Helsinki/berth-reservations-admin)](https://img.shields.io/github/license/City-of-Helsinki/berth-reservations-admin)

Staff interface for Venepaikka.

Environments:

- [Staging](https://venepaikka-admin.test.kuva.hel.ninja)
- [GraphQL API URL](https://venepaikka-federation.test.kuva.hel.ninja/)
- [GraphQL API overview](https://venepaikka-federation.test.kuva.hel.ninja/voyager)

---

## Requirements

- Node 12.x
- Yarn
- Git
- Docker and docker-compose
- Recommended editor for this project is Visual Studio Code

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/City-of-Helsinki/berth-reservations-admin.git
cd berth-reservations-admin

yarn
```

After cloning this repository, create a new `.env.development.local` file from the provided `.env` file to be able to change environment variables such as `REACT_APP_API_URL`.

```bash
cp .env .env.development.local
```

## Development environment setup

### React development environment

To start the development server, run the following

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.

### Testing

To run tests, run:

```bash
yarn test
```

### Dockerized development environment

1. Check that Docker and Docker CLI are installed, and port `3000` is free and not occupied by a running server.

2. Make sure you have env variables in `.env.development.local`, otherwise extend it from the example by:

   ```bash
   cp .env .env.development.local
   ```

3. Start building Docker image and start container:

   ```bash
   docker-compose up
   ```

4. Open [http://localhost:3000](http://localhost:3000).

### Dockerized production environment

1. Check that Docker and Docker CLI are installed, port `80` is free and not occupied by a running server.

2. Build Docker image with:

   ```bash
   docker build -t berth-reservation-admin .
   ```

3. Start Docker container with:

   ```bash
   docker container run -p 80:80 -d berth-reservation-admin
   ```

4. Open [http://localhost](http://localhost).

## Useful Docker commands

- To rebuild the Docker images:

  ```bash
  docker-compose up --force-recreate --build
  ```

- To enter inside Docker container environment:

  ```bash
  docker-compose exec app sh
  ```

- Remove Docker container if needed:

  ```bash
  docker rm -f berth-reservation-admin
  ```

- Remove Docker image:

  ```bash
  docker rmi berth-reservations-admin_app
  ```

- Running commands inside the Docker environment (tests for example):
  (Make sure Docker container is running)
  `$ docker-compose run app YOUR_COMMAND_HERE`
  - Encounter `node-sass` issue ? Try going inside the Docker container environment and running `npm rebuild node-sass`

## Deployment

### Staging deployment

Staging deployment is handled by CI/CD pipeline for new commits on `develop` branch.

## Browser tests

Browser tests are written in TypeScript with [TestCafe](https://devexpress.github.io/testcafe/) framework and they are run against [test environment](https://venepaikka-admin.test.kuva.hel.ninja) in CI as GitHub Actions Cron Job (daily) with Chrome (headless mode).

### How to run locally

Set test user login credentials

- Open `.env.development.local` and set `BROWSER_TESTS_UID` and `BROWSER_TESTS_PWD`
- TBD: Link to values

Running against test environment

- `yarn browser-test`

Running against local environment

- `yarn browser-test:local`

### CI setup

GitHub Actions runs the `yarn browser-test:ci` script.
