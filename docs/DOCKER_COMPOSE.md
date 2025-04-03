# Docker Compose Instructions

This document provides instructions for building and running the Next.js application using Docker Compose.

## Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Setup Environment Variables

Create a `.env` file in the root of the project using the provided example:

```sh
cp .env.example .env

# Update the values in the .env file
```

## Development Build

To build and run the application in development mode using Docker Compose:

1. Start the Docker Compose services:

   ```sh
   docker-compose up --build
   ```

The application will be available at `http://localhost:3000`.

## Production Build

To build and run the application in production mode using Docker Compose:

1. Start the Docker Compose services:

   ```sh
   docker-compose -f compose.prod.yml up --build
   ```

The application will be available at `http://localhost:3000`.
