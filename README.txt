HOW TO RUN MY PROJECT:
To build the docker image, run this command once inside the 'rachelle' folder:
sudo docker build -t chell/node-web-app . 

To run the docker image:
docker run -d -p 3000:3000 chell/node-web-app

Then visit: 
127.0.0.1:3000     or      localhost:3000

HOW I INSTALLED THE VARIOUS COMPONENTS:
1. The following documentation was used to install Docker
	https://docs.docker.com/engine/install/ubuntu/
2. The following documentation was used to install Node.js v15 on Ubuntu
	https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
	https://github.com/nodesource/distributions/blob/master/README.md#debinstall
3. To initialize a new npm project, the following command was used
	npm init
4. To install express, the following command was used
	npm install express
5. Lastly, once the to-do list implementation was complete (which can be found in index.js),
   a docker image was built and ran using the following documentation
	https://nodejs.org/en/docs/guides/nodejs-docker-webapp/


This is an update
