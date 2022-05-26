const express = require('express');
const path = require('path')

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index', {name: 'dummy'});
})

app.listen(8080);