FROM node:alpine

WORKDIR /usr/src/app
# RUN npm init -y
# RUN npm install express cors mongoose dotenv
# RUN npm install nodemon --save-dev

COPY package*.json ./
RUN npm install

COPY . ./

# CMD [ "npm", "run", "dev" ]
CMD [ "npm", "start" ]
EXPOSE 8000