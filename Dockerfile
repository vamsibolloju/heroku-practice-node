FROM node:15
WORKDIR /app
COPY package*.json ./
COPY dist ./dist
EXPOSE 5000
CMD [ "npm", "start" ]
