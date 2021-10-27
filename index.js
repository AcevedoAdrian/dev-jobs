const mongoose = require('mongoose');

// importa la coneccion a la base de datos  
require('./config/db')


const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const router = require('./routes/index');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

// (session) con esto pasamos variables al paquete connect-mongo
const MongoStore = require('connect-mongo');


// Obtenemos todasd las varibles declaradas en el archivo .env
require('dotenv').config({
  path: 'variables.env'
});


// habilitar handelbars como view del proyecto 
app.engine('handlebars', exphbs({
  defaultLayout: 'layout'
}));
app.set('view engine', 'handlebars');

// static files: para obtener los archivos estaticos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Para navegar en proyecto, almacenamos la coneccion en una sesion para no estar autenticando todo el tiempo
app.use(cookieParser());
// firma de la sesion, reverse y saveUninitialized son para que no se guarden las variables de sesion en la base de datos y si no hace nada tampoco guarda 
app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({mongoUrl: process.env.DATABASE}),
}));


app.use('/', router());



app.listen(process.env.PORT);