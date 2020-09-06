const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController')

router.get('/carrito',carritoController.carrito)


//router.get('/carrito', function(req, res, next) {
  //  res.render('carrito', { title: 'Express' });
  //});

module.exports = router;