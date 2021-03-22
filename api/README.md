# Todo Api

## Running the app with Docker

```bash
$  docker-compose up --build production
```

## Running the app without Docker

1.  Create .env file by cloning the [.env.sample](.env.sample)

```bash
$ cp .env.sample .env
```

2.  Fill the .env file with corresponding variables

3.  Install packages

```bash
$ yarn install
```

4. Run the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Running tests with Docker

```bash
# unit and integration tests
$ docker-compose run test

# test coverage
$ docker-compose run test yarn test:cov
```

## Running tests without Docker

1.  Create .env file by cloning the [.env.sample](.env.sample)

```bash
$ cp .env.sample .env
```

2.  Fill the .env file with corresponding variables

3.  Run the tests

```bash
# unit and integration tests
$ yarn test

# test coverage
$ yarn test:cov
```

## API Doc

You can access the API documentation (Swagger UI) by entering base URL of the API (http://localhost:3000)
