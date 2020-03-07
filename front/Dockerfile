FROM node:10
WORKDIR /usr/src/app
ENV YOLO 35
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 8080:8080
CMD [ "node", "server.js" ]