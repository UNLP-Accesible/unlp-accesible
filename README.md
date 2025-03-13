# Next.js Starter

This project was initialized with [create-awesome-node-app](https://www.npmjs.com/package/create-awesome-node-app). **DO NOT USE THIS TEMPLATE DIRECTLY!** Instead, create your own project using the command and following the interactive menu options. For more information, refer to the documentation!

## Features

- ⚡️ **Instant HMR (Hot Module Replacement)** - Leveraging Next.js for fast refreshes and updates during development.
- ⚛ **React Integration** - Utilizes [React](https://reactjs.org/) for building the user interface.
- 🦾 **TypeScript Support** - Ensures type safety with [TypeScript](https://www.typescriptlang.org/).

## Extra Documentation

Discover more about the project structure, available scripts, and much more in the [docs](./docs) folder!

- Building and deploying the application with [Docker](./docs/DOCKER.md).
- Building and running the application with [Docker Compose](./docs/DOCKER_COMPOSE.md).
- and more!

## Pre-packed Development Tools

- [TypeScript](https://www.typescriptlang.org/) - For type-safe code.
- [eslint](https://eslint.org/) - A linter tool for identifying and reporting on patterns in JavaScript and JSX.
- [prettier](https://prettier.io/) - An opinionated code formatter for clean and consistent code style.
- [husky](https://www.npmjs.com/package/husky) - Simplifies the use of Git hooks in your project.
- [lint-staged](https://www.npmjs.com/package/lint-staged) - Allows running linters on git staged files to catch errors before they're committed.

## Setup Development Environment

You can set up your development environment using one of the following methods:

### Using Dev Containers (Recommended)

This project includes a pre-configured development environment using [VSCode Dev Containers](https://code.visualstudio.com/docs/remote/containers).

1. **Install Docker**: [Download and Install Docker](https://www.docker.com/).
2. **Install VSCode**: [Download and Install VSCode](https://code.visualstudio.com/).
3. **Install the Remote Development Extension**: Install the [Remote Development extension pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).
4. **Open the repository within the container**:

   Open the repository in VSCode and select `Reopen in Container` to use the pre-configured DevContainer environment.

   All necessary tools are pre-installed and configured.

### Running Locally

If you prefer to run the project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/). To install the correct Node.js version, consider using [fnm](https://github.com/Schniz/fnm).
- [pnpm](https://pnpm.io/) - To install the project dependencies.

## Quick Start

```sh
# Install the correct version of Node.js
# and install the project dependencies
fnm use
pnpm install

# Generate a .env.local file using Sanity
pnpm run setup

# Start the development server
pnpm run dev
```

## Development Workflow

For most development work, you'll primarily use `pnpm run dev`. However, you have additional scripts at your disposal for various tasks:

| pnpm run <script>  | Description                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| `npm run dev`      | Starts the local development server for building and previewing your application.                   |
| `npm run format`   | Formats the codebase using [Prettier](https://prettier.io/) to ensure consistent code styling.      |
| `npm run lint`     | Runs linting on the codebase to identify and report on patterns with [eslint](https://eslint.org/). |
| `npm run lint:fix` | Automatically fixes linting errors in the codebase where possible.                                  |

## Production

Scripts for preparing and viewing the production version:

| pnpm run <script> | Description                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------- |
| `npm run start`   | Serves your application using the production setup, ensuring it's ready for deployment.      |
| `npm run build`   | Compiles the application into the `dist/` directory, preparing it for production deployment. |
