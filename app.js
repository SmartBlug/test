const express = require('express')
const app = express()

app.get('/', function (req, res) {
<<<<<<< HEAD
  res.send('Hello World 3!')
=======
  res.send('Hello World 2!')
>>>>>>> 1242b73ab4483f162337b6f70a8c4839a81c841e
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})