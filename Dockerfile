FROM node:20.9.0-alpine3.17
WORKDIR /app
COPY package*.json ./
RUN npm install
ADD . . 
RUN npx prisma generate
CMD ["npm", "run","dev"]


