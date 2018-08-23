# Containerized Node JS engine & API info provider
A basic docker container for node.js application.

## API info Provider
Also an API details provider which will provide you all the headers, body and url params of any request.

## Steps to get API details

Send a request through any HTTP method like below.

```
POST/GET/PUT/DELETE
https://default-rest-api.herokuapp.com/api/getApiCallDetails
```

Clone the repo
```
git clone REPONAME
```

Build docker image
```
docker build -t APP-NAME
```
Run docker image
```
docker run -p 8080:8888 APP-NAME
```


## Cheerio