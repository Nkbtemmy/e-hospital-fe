# Use Node.js 18 LTS as base image
FROM node:lts

# Set working directory
RUN mkdir -p /code
RUN npm install -g npm@latest
WORKDIR /code
# Copy package.json and yarn.lock to working directory
# COPY package.json ./
COPY package.json /code/package.json

# Install dependencies and devDependencies
RUN yarn install

# Copy the rest of the application code to the working directory
# COPY . .
COPY . /code

# EXPOSE 3000
# RUN yarn build
ENV VITE_API_URL=https://e-hospital-gateway.onrender.com
# CMD ["npm", "run", "dev", "--host"]
# Build the application
RUN yarn build

# Expose the port that the application listens on
EXPOSE 3000

# # Start the application
CMD ["yarn", "start"]