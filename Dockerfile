FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY patches ./patches

RUN npm install && npm run postinstall --production

COPY . .

# Expone el puerto definido en .env o por defecto 5111
EXPOSE 5111

CMD ["node", "index.js"]