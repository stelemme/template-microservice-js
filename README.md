# Microservices Express Template
## Installation
To install this Microservices Template, make sure Node.js 19 or higher is installed on your device. Installing the Microservice can be done by running the following command. The command makes sure all the dependencies present in the [package.json](https://github.com/stelemme/template-microservice-js/blob/main/package.json) file are correctly installed.
```
npm install
```
## Running the Microservice
The Microservice can be run normally or in development mode respectively with the following commands.
```
npm run start
npm run start:dev
```
## Dockerizing the Microservice
To Dockerize the Microservice, make sure Docker is installed. The Microservice can be built into a Docker Image using the following command.
```
docker build -t <image-name> .
```
To run the Docker image in a Docker Container, use the following command.
```
docker run <image-name>
```
