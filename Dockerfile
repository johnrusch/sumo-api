FROM node:latest AS build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:latest as production

WORKDIR /app
COPY package.json .
RUN yarn install --production
COPY --from=build /app/dist ./dist
CMD ["yarn", "start:prod"]

