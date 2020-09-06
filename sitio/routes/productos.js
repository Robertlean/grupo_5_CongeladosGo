const express = require('express');
const router = express.Router();
















const productosController = require('../controllers/productosController')

router.get('/listar',productosController.listar)
router.get('/detalle/:id',productosController.detalle)

module.exports = router;