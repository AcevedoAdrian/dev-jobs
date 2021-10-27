const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

// conectar a la base de datos.
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});

mongoose.connection.on('error', error => console.log(error));

// importamos los modelos
require('../models/Vacancies')