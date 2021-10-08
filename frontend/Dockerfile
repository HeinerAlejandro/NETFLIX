#build process

FROM node:14.15-alpine

WORKDIR /var/www/netflix/frontend

COPY package.json .

RUN yarn

COPY . .