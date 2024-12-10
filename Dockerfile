# Gunakan image Node.js sebagai base image
FROM node:18-alpine

# Tentukan working directory
WORKDIR /

# Salin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh file proyek ke dalam container
COPY . .

# Build aplikasi untuk produksi
RUN npm run build

# Gunakan image minimal untuk menjalankan aplikasi
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Salin file konfigurasi default NGINX
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
