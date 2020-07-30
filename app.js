const express = require('express')
const app = express()

const version = require('./package.json').version;

app.get('/', function (req, res) {
  res.send('Hello World 4 - version '+version)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})