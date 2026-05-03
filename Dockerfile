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

CMD [ "npm", "run", "dev" ]

FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Build arguments for Sanity config (needed at build time)
ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ARG NEXT_PUBLIC_SANITY_DATASET
ARG SANITY_API_READ_TOKEN

# Persist as env vars so Next.js can read them during `yarn build`
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=${NEXT_PUBLIC_SANITY_PROJECT_ID}
ENV NEXT_PUBLIC_SANITY_DATASET=${NEXT_PUBLIC_SANITY_DATASET}
ENV SANITY_API_READ_TOKEN=${SANITY_API_READ_TOKEN}

# Install dependencies to use npm
COPY --chown=node:node package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY --chown=node:node --from=development /app/node_modules node_modules

# Copy the rest of the files
COPY --chown=node:node . .

# Build Next.js based on the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm build --webpack; \
  else npm run build; \
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
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD [ "node", "server.js" ]
