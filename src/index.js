const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

app.engine('hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'resources', 'views', 'partials'),
  extname: '.hbs',
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.get('/', (req, res) => {
  return res.render('home')
})

app.get('/search', (req, res) => {
  console.log(req.query.q)
  return res.render('search')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
