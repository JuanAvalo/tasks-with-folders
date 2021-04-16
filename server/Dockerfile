FROM node:12

WORKDIR /opt/app

COPY package.json .

RUN npm i --quiet

RUN npm i -g nodemon --quiet

COPY . .