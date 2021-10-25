const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const router = require('./routes/index');
const app = express();

// habilitar handelbars como view del proyecto 
app.engine('handlebars', exphbs({
  defaultLayout: 'layout'
}));
app.set('view engine', 'handlebars');

// static files: para obtener los archivos estaticos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', router());
app.listen(3000);