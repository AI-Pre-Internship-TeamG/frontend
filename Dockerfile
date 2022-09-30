FROM node:18.4.0-alpine
USER root

WORKDIR /frontend

COPY . /frontend
COPY package.json yarn.lock ./

RUN npm install -g && npm install -g typescript
RUN yarn --ignore-platform
COPY . ./

RUN yarn run build