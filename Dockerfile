# base image
FROM node:16-alpine

# working directory inside container
WORKDIR /app

# copy package.json to the working directory and install dependencies
COPY package.json ./
RUN npm install

# copy remaining files to working directory
COPY . .

# expose port fo the app to listen on
EXPOSE 5000

# start application
CMD  ["npm", "run", "dev"]
