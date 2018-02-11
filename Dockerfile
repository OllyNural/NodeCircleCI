FROM node:8

WORKDIR /var/app
COPY package-lock.json ./
COPY package.json ./
RUN npm install

COPY server.js ./
COPY app.js ./
COPY maths.js ./

EXPOSE 8080

CMD npm run start