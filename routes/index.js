const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();

module.exports = () => {
  router.get('/', homeController.mostrarTrahajos);

  return router;
}