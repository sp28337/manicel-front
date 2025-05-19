FROM node:22.14.0-alpine

ENV NEXT_PUBLIC_API_URL=backend

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]