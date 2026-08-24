# 1. LÉPÉS: Build folyamat
FROM node:22-alpine AS build

WORKDIR /app

# Függőségek másolása és telepítése
COPY package*.json ./
RUN npm ci

# Teljes forráskód másolása és a gyártási változat felépítése
COPY . .
RUN npm run build

# 2. LÉPÉS: Kiszolgálás Nginx-szel
FROM nginx:alpine

# A Vite 'base' beállítása miatt egy 'my-website' nevű almappába rakjuk a fájlokat
COPY --from=build /app/dist /usr/share/nginx/html/my-website

# Az egyedi Nginx konfiguráció bemásolása
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
