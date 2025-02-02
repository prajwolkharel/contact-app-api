# official Node.js image
FROM node:16-alpine

# working directory inside the container
WORKDIR /app

# copy package.json into container and install dependencies
COPY package.json ./
RUN npm install

# copy the rest of the files into the container
COPY . .

# expose port
EXPOSE 5001

# command to start the application
CMD ["npm", "start"]
