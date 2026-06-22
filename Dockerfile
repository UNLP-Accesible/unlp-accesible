# syntax=docker/dockerfile:1.4

FROM node:22-alpine AS development

# Set working directory
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm i; \
    else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
    fi

# Copy the rest of the files
COPY . ./

# Run dev server as non-root
USER node

CMD [ "npm", "run", "dev" ]

FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Public build args (safe to bake into the image — no secrets)
ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ARG NEXT_PUBLIC_SANITY_DATASET
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=${NEXT_PUBLIC_SANITY_PROJECT_ID}
ENV NEXT_PUBLIC_SANITY_DATASET=${NEXT_PUBLIC_SANITY_DATASET}

# SANITY_API_READ_TOKEN is a secret: pass it inline in the build command so it
# is NOT stored as an image ENV layer (avoids leaking via `docker history`).
# At runtime, inject it via Docker Compose `environment:` or a .env file.
ARG SANITY_API_READ_TOKEN

# Install dependencies to use npm
COPY --chown=node:node package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY --chown=node:node --from=development /app/node_modules node_modules

# Copy the rest of the files
COPY --chown=node:node . .

# Build Next.js — SANITY_API_READ_TOKEN is passed inline (not stored in ENV layer)
RUN \
  if [ -f yarn.lock ]; then SANITY_API_READ_TOKEN=${SANITY_API_READ_TOKEN} yarn build; \
  elif [ -f package-lock.json ]; then SANITY_API_READ_TOKEN=${SANITY_API_READ_TOKEN} npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable && SANITY_API_READ_TOKEN=${SANITY_API_READ_TOKEN} pnpm build; \
  else SANITY_API_READ_TOKEN=${SANITY_API_READ_TOKEN} npm run build; \
  fi

# Use the node user from the image as the user to run the app
USER node

FROM node:22-alpine AS production

# Set working directory
WORKDIR /app

COPY --from=build /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static

# Use the node user from the image as the user to run the app
USER node

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
ENV HOSTNAME="0.0.0.0"

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/', r => { process.exit(r.statusCode === 200 ? 0 : 1) })" || exit 1

CMD [ "node", "server.js" ]
