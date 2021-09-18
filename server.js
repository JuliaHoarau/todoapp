const express = require('express')
const app = express()

app.use('/', express.static('app'))

app.get('/', function (req, res) {
  res.send('Test Page')
})

app.get('/api', function (req, res) {
    res.send('Test the API')
  })

app.listen(3000)


