FROM node:latest
RUN mkdir -p /home/si84/app
WORKDIR /home/si84/app
COPY package.json /home/si84/app
RUN npm cache clean
RUN npm install
COPY . /home/si84/app
EXPOSE 4200
CMD ["npm", "start"]