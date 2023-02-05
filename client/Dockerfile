FROM node:alpine

RUN mkdir /client
WORKDIR /client

COPY ./package.json ./
RUN npm install

COPY ./ ./

CMD ["npm", "build"]
