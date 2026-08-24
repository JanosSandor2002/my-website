# 1. LÉPÉS: Build
FROM node:22-alpine AS build

WORKDIR /app

# A frontend mappa tartalmát másoljuk a konténerbe
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# 2. LÉPÉS: Kiszolgálás Nginx-szel
FROM nginx:alpine

# A beépített dist mappa tartalmát másoljuk az Nginx alá
COPY --from=build /app/dist /usr/share/nginx/html

# Az egyedi Nginx konfiguráció
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
