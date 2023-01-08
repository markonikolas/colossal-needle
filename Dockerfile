FROM node:alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

COPY . .

RUN apk --no-cache add curl

RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;

RUN pnpm install && pnpm store prune

EXPOSE 5000

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["pnpm", "run", "start"]