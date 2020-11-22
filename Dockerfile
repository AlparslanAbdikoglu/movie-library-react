FROM node:lts

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

ENV PORT =8081

EXPOSE 8081

CMD [ "node", "index.js"] 