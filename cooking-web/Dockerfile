FROM node:14.6-alpine3.12 AS build
ARG ENV
WORKDIR /web-app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build-${ENV}

FROM nginx:1.19.9-alpine
COPY --from=build /web-app/dist/cooking-web /usr/share/nginx/html
