FROM node:12-alpine as installer
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .

# ----

# Run tests
FROM node:12-alpine as test
WORKDIR /usr/src/app
COPY --from=installer /usr/src/app/ .
CMD yarn test

# ----

# Run build script
FROM node:12-alpine as builder
RUN apk update && apk add curl bash
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin
WORKDIR /usr/src/app
COPY --from=installer /usr/src/app/ .
RUN yarn build
RUN npm prune --production
RUN /usr/local/bin/node-prune
RUN rm -rf node_modules/rxjs/src/
RUN rm -rf node_modules/rxjs/bundles/
RUN rm -rf node_modules/rxjs/_esm5/
RUN rm -rf node_modules/rxjs/_esm2015/
RUN rm -rf node_modules/swagger-ui-dist/*.map

# ----

# Run app
FROM node:12-alpine 
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
CMD node dist/main.js