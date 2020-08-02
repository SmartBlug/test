const express = require('express')
const app = express()

const package = require('./package.json');

app.get('/', function (req, res) {
  res.send('Hello World 12 - version '+package.version+' build '+package.build);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})