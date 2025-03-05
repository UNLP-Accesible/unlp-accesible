# Docker Instructions

This document provides instructions for building and running the Next.js application using Docker.

## Prerequisites

- [Docker](https://www.docker.com/)

## Setup Environment Variables

Create a `.env.local` file in the root of the project using the provided example:

```sh
cp .env.example .env.local

# Update the values in the .env.local file
```

## Development Build

To build and run the application in development mode:

1. Build the Docker image:

   ```sh
   docker build --target development -t unlp-accesible:dev .
   ```

2. Run the Docker container:

   ```sh
   docker run -p 3000:3000 unlp-accesible:dev
   ```

The application will be available at `http://localhost:3000`.

## Production Build

To build and run the application in production mode:

1. Build the Docker image:

   ```sh
   docker build --target production -t unlp-accesible:prod .
   ```

2. Run the Docker container:

   ```sh
   docker run -p 3000:3000 unlp-accesible:prod
   ```

The application will be available at `http://localhost:3000`.
