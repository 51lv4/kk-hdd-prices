# Use the official Node.js image as a base image
FROM node:lts-iron

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install -g @angular/cli

# Expose the port used by the Angular app
EXPOSE 4200

# Start the Angular development server
CMD ["npm", "start"]
