FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY ts*.json ./

COPY src ./src

RUN mkdir ./data

RUN mkdir ./data/files

COPY data/files ./data/files

EXPOSE 8080

CMD ["npm", "start"]
