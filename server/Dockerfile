FROM node:alpine

RUN mkdir /server
WORKDIR /server

COPY ./package.json ./
RUN npm install

COPY ./ ./

CMD ["npm", "run", "start"]