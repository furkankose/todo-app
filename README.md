# Todo App

## About The Project

### Tech Stack

The project is built with NestJS + VueJS + MongoDB + Docker.

### Tools

#### ESLint + Prettier

To preserve coding standards, ESLint and Prettier is used in the project.

#### husky + commitlint (Conventional Commit)

To ensure that all commit messages meet the [conventional commit format](https://conventionalcommits.org/), commitlint package is used. If the commit message does not follow the conventional commit pattern, the package does not allow you to commit your changes until the commit message meets the requirements.

#### Pact

To verify integration between api and client independently in order to test what has been passed and see if what is returned matches with the contract.

#### GitHub Actions

GitHub actions is used for creating CI/CD pipelines of the project.

- When a new pull request is opened to be able to merge the new changes into main branch, GitHub Actions runs lint and test steps to ensure that nothing is broken with the new changes
- When the new changes are commited into main branch, GitHub Actions builds the application, runs the tests, and deploys the application if build and test steps completed succesfully.

### Project Structure

#### Todo API

##### Error Handlers

There are two types of global error handler; [anyExceptionFilter](/api/src/filters/anyException.filter.ts) and [httpExceptionFilter](/api/src/filters/httpException.filter.ts).

HttpExceptionFilter is responsible from catching the HTTP exceptions that are throwed in controller and service layers. The other error handler, AnyExceptionFilter, is responsible from catching all the other application level exceptions. If there will be a need for handling exceptions more spesifically in function level, local exception handlers can be added inside of the functions.

##### Request Validation

The ValidationPipe provides a convenient approach to enforce validation rules for all incoming client payloads, where the specific rules are declared with simple annotations in local class/DTO declarations in each module. It uses class-validator and class-transformer packages.

##### Swagger UI

Swagger UI is used for allowing you to visualize and interact with the API’s resources without having any of the implementation logic in place. (http://localhost:3000)

## License

[MIT](LICENSE)
