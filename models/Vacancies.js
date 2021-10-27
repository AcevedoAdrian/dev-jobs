const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');
const shortid = require('shortid');

// Declaro el schema de vacantes
const vacanciesSchema = new mongoose.Schema({
    title: {
      type: String,
      required: 'El nombre de la vacantes es obligatorio',
      trim: true
    },
    company:{
      type: String,
      trim: true,
    },
    location: {
      type: String,
      required: 'La ubicación es obligatoria',
      trim: true,
    },
    salary: {
      type: String,
      default: 0,
      trim: true,
    },
    contract: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      loadClass: true,
    },
    skills:[String],
    candidate:[{
      name: String,
      email: String,
      cv: String,
    }]

});

// Ejecutando meddleware antes de guardar en la base de datos 

vacanciesSchema.pre('save', function(next){
  // creo la url quitar espacios  y poner en minusculas
  const url = slug(this.title);
  // agrego un id unico con el titutlo y un id 
  this.url = `${url}-${shortid.generate()}`;
  next();
}
)
module.exports = mongoose.model('Vacant', vacanciesSchema);