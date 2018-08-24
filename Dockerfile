FROM node:10
WORKDIR /home/node/server

COPY package*.json ./
RUN npm install

COPY server.js .
COPY src/* ./src/
COPY test/* ./test/

EXPOSE 3000

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
