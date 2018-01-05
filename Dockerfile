FROM node:latest
RUN mkdir -p /home/si84/app
WORKDIR /home/si84/app/

#COPY . /home/si84/app
WORKDIR /home/si84/app/src/main/resources/
RUN npm cache clean --force
COPY . /home/si84/app
RUN npm install

USER node
RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm install -g @angular/cli@latest
EXPOSE 4200
CMD ["ng", "serve", "--port", "4200","--host", " 0.0.0.0"]