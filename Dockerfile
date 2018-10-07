FROM registry.ng.bluemix.net/ibmnode:latest

ADD . /
WORKDIR /
RUN npm install

EXPOSE 443
EXPOSE 80
EXPOSE 3000

ENTRYPOINT ["node", "/app.js"]
