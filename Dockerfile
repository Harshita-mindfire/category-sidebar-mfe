# Base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app's source code
COPY . .

# Build the app
RUN npm run build

# Expose the desired port (e.g., 3000 for a typical React app)
EXPOSE 5001

# Run the app
CMD ["npm", "start"]
