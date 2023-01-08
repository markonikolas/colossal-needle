FROM node:alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate

RUN pnpm install && pnpm store prune

EXPOSE 5000

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["pnpm", "run", "start:dev"]