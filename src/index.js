// ...existing code...
const { engine } = require('express-handlebars')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

// use absolute paths so views resolve correctly from src/
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));
console.log(path.join(__dirname, 'resources', 'views'))

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) =>{
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})