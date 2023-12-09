const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 5000
const restaurant = require('./public/jsons/restaurant.json').results


app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render( 'index', { restaurant })
})

app.get('/', (req, res) => {
  res.redirect('/restaurant')
});

app.get('/restaurant/:id', (req, res) => {
  const id = Number(req.params.id)
  const rest = restaurant.find(restaurant => restaurant.id === id )
  res.render('detail',{ rest })
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})