FROM cypress/included:7.0.1

WORKDIR /e2e

COPY ./cypress ./cypress
COPY cypress.json cypress.json
COPY package.json package.json

RUN npm install