FROM node:22.14.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# COPY ./entrypoint.sh /usr/bin/entrypoint.sh

# ENTRYPOINT [ "entrypoint.sh" ]

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]