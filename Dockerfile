# Stage 1: Build dependencies (builder)
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --no-cache --no-package-lock

COPY . .

# Stage 2: Run the development server (runner)
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
