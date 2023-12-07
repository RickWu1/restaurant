const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('express app for movies')
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})