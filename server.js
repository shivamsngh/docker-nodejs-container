/*
© Shivam Singh 2018
Toony

Licensed under MIT
*/
'use-strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// Use body parser t parse body of incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw({ extended: true }));
app.use(bodyParser.text({ extended: true }));

// Server static HTML Files on root call
app.use(express.static('src'));

// Configure app for responsing to all HTTP methods 
app.all('/api/getApiCallDetails', (req, res) => {
  const api_details = {
    type:req.method,
    urlParams: {},
    body: {},
    headers: {}
  }

  console.log("req http method", req.method);
  console.log("headers", req.headers);
  console.log("body", req.body);
  console.log("urlParams", req.query);

  if (req.headers) {
    api_details.headers = req.headers;
  }
  if (req.body) {
    api_details.body = req.body;
  }
  if (req.params) {
    api_details.urlParams = req.query;
  }
  res.status(200).send(api_details);
})

app.listen(port, function () {
  console.log(`Listening on port ${port}.`);
});
