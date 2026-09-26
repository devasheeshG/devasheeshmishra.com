FROM node:22.23.1-slim AS build_stage

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@9.15.9

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM node:22.23.1-slim

WORKDIR /app

# Install pnpm in production stage
RUN npm install -g pnpm@9.15.9

COPY --from=build_stage /app/package.json ./package.json
COPY --from=build_stage /app/node_modules ./node_modules
COPY --from=build_stage /app/.next ./.next
COPY --from=build_stage /app/public ./public

CMD ["pnpm", "start"]
