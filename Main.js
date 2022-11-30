const { response } = require('express')
var express = require('express')
var app = express();

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home')
})

const PORT = 5001
app.listen(PORT)
console.log("server is running!")