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

- Node 14.x
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

### Problems starting development environment

#### Windows specific

- `SassError: File to import not found or unreadable`, e.g. `@import 'colours';`
  - Change all `:` characters to `;` in SASS_PATH, see [sass documentation](https://github.com/sass/sass/blob/embedded-protocol-2.1.0/js-api-doc/legacy/options.d.ts#L32-L35)

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

## Setting up development environment locally with docker

These instruction apply when you want to locally run all the required services. You will also need to configure values in your `.env.development.local` to point to your locally running instances.

### Set tunnistamo hostname

Add the following line to your hosts file (`/etc/hosts` on mac and linux):

    127.0.0.1 tunnistamo-backend

### Create a new OAuth app on GitHub

Go to https://github.com/settings/developers/ and add a new app with the following settings:

- Application name: can be anything, e.g. local tunnistamo
- Homepage URL: http://tunnistamo-backend:8000
- Authorization callback URL: http://tunnistamo-backend:8000/accounts/github/login/callback/

Save. You'll need the created **Client ID** and **Client Secret** for configuring tunnistamo in the next step.

### Install local tunnistamo

Clone https://github.com/City-of-Helsinki/tunnistamo/.

Follow the instructions for setting up tunnistamo locally. Before running `docker-compose up` set the following settings in tunnistamo roots `docker-compose.env.yaml`:

- SOCIAL_AUTH_GITHUB_KEY: **Client ID** from the GitHub OAuth app
- SOCIAL_AUTH_GITHUB_SECRET: **Client Secret** from the GitHub OAuth app

To get silent renew to work locally you also need to set:

- ALLOW_CROSS_SITE_SESSION_COOKIE=True

After you've got tunnistamo running locally, access the tunnistamo docker container:

`docker-compose exec django bash`

and execute the following four commands inside your docker container:

```bash
./manage.py add_oidc_client -n berths-admin-ui -t "id_token token" -u "http://localhost:3000/callback" "http://localhost:3000/silent-callback.html" -i https://api.hel.fi/auth/berths-admin-ui -m github -s dev
./manage.py add_oidc_client -n berths-api -t "code" -u http://localhost:8081/return -i https://api.hel.fi/auth/berths -m github -s dev -c
./manage.py add_oidc_api -n berths -d https://api.hel.fi/auth -s email,profile -c https://api.hel.fi/auth/berths
./manage.py add_oidc_api_scope -an berths -c https://api.hel.fi/auth/berths -n "Venepaikka" -d"Lorem ipsum"
./manage.py add_oidc_client_to_api_scope -asi https://api.hel.fi/auth/berths -c https://api.hel.fi/auth/berths-admin-ui
./manage.py add_oidc_client_to_api_scope -asi https://api.hel.fi/auth/helsinkiprofile -c https://api.hel.fi/auth/berths-admin-ui
```

Also add http://localhost:3000/ to Post Logout Redirect URIs of berths-admin-ui client on Tunnistamo Django admin http://tunnistamo-backend:8000/admin/oidc_provider/client/

### Set up open-city-profile backend

Clone https://github.com/City-of-Helsinki/open-city-profile/ and follow the instructions in the repository for setting up the project locally.

Client ID's of services using the open-city-profile should be configured in the Django Admin (http://localhost:8080/admin/):

- Navigate: Django admin -> Services -> Venepaikka -> Client ids
- Add the following client ID's for the Venepaikka service:
  - https://api.hel.fi/auth/berths-admin-ui
  - https://api.hel.fi/auth/berths

### Set up berth-reservations backends

Clone and set the following services as instructed:

- https://github.com/City-of-Helsinki/berth-reservations
- https://github.com/City-of-Helsinki/berth-federation-gateway

### Set up admin permissions

Before you can access the berth-reservations-admin site, your Tunnistamo user needs to be set up with permissions.

Permissions that need to be added:

- Add user to `berth` group in open-city-profile http://localhost:8080/admin/
- Add user to all groups in berth-reservations http://localhost:8081/admin/

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
