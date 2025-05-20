FROM node:22.14.0-alpine

WORKDIR /app

ENV NEXT_PUBLIC_API_URL=backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]