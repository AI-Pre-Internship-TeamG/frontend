FROM node:18.4.0-alpine
USER root

WORKDIR /frontend
COPY . /frontend

RUN npm install && npm install -g typescript
RUN yarn --ignore-platform
COPY . ./

RUN yarn run build