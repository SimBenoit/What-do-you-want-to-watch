# syntax=docker/dockerfile:1

# official image
FROM node:20

# working dir
WORKDIR /

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

# Command to run app
CMD ["npm", "start"]
