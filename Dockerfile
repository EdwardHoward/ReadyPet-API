FROM node:argon
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY /server/package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

EXPOSE 8080

CMD ["node", "/usr/src/app/server/server.js"];