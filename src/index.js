const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const app = express()
const port = 3000
const routes = require('./routes/index.route')



app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('combined'))

app.engine('hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'resources', 'views', 'partials'),
  extname: '.hbs',
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

routes(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
