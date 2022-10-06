FROM node:18.4.0-alpine
USER root

WORKDIR /frontend

COPY . /frontend
COPY package.json yarn.lock ./

RUN yarn --ignore-platform
COPY . ./

CMD [ "yarn", "start" ]