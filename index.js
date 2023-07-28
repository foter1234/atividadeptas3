const express = require('express');
const path = require('path');
const { usuario } = require('./models');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async function(req, res){
  var usuarios = await usuario.findAll();
  res.render('index', { usuarios });
})

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});