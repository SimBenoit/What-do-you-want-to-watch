# syntax=docker/dockerfile:1

# Use the official Node.js base image
FROM node:20

# Set the working directory inside the container
WORKDIR /

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
