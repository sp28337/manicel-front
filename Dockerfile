FROM node:22.14.0-alpine

WORKDIR /app

COPY package*.json ./
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY ./wait-for-it.sh /usr/bin/wait-for-it.sh
CMD ["echo", "!!!!!!!! Container_A is available now !!!!!!!!"]

# RUN npm install

# COPY . .

# RUN npm run build



# EXPOSE 3000

# CMD ["/wait-for-it.sh", "back:8000", "--", "npm", "start"]