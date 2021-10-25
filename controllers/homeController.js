exports.mostrarTrahajos = (req, res) => {
  res.render('home', {
    namePage: 'devJobs',
    tagline: 'Encuentra trabajos de desarrollo web y programación',
    bar: true,
    button: true
  });
}