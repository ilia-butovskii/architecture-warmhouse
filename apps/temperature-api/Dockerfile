FROM node:20-alpine

WORKDIR /app

COPY package.json index.js ./

RUN npm install

EXPOSE 8081

RUN npm install

CMD ["npm", "start"]