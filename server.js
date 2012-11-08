var express = require('express')
  , app = express()
  , pages = require(__dirname + '/controllers/pages')
  
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
  
app.get('/', function (req, res) {
  res.redirect('home')
})
app.get('/home', pages.home)

app.listen(3000, function () {
  console.log('Listening on port ', 3000)
})

