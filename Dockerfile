# Use Node.js 18 LTS as base image
FROM node:20-alpine3.16

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock to working directory
COPY package*.json ./

# Install dependencies and devDependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN yarn build

# Expose the port that the application listens on
EXPOSE 5173

# Start the application
CMD ["yarn", "start"]