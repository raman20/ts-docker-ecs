FROM node:18-alpine

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

CMD ["npm", "run", "start"]