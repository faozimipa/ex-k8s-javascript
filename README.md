# ex-k8s-javascript

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Node.js Version][node-image]][node-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]


## Install
ini adalah project sederhana untuk berlatih k8s. project ini menggunakan minikube, docker, nodejs.

### clone project
```sh
$ git clone https://github.com/faozimipa/ex-k8s-javascript.git
$ cd ex-k8s-javascript
```

### Install dependency
```sh
$ npm i
```

### Running local
```sh
$ node index.js
```

## Running and Build with Docker

### Running with docker
```sh
$ docker compose up
```
Serve at the browser
```sh
$ localhost:3000
```
### Build
```sh
$ docker compose build
```

### Upload to docker hub
```sh
$ docker login
$ docker image tag faozi/ex-k8s-javascript:1.0.1 faozi/ex-k8s-javascript:1.0.1
```

## Running via kubectl

```sh
$  kubectl apply -f deployment/deployment.yml
$  kubectl apply -f deployment/service.yml
```

Serve at the browser
```sh
$ localhost
```


### Notes: 
if external ip status pending, do this:
```sh
$ minikube tunnel
```


