const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController')

router.get('/registro',usuariosController.registro);
router.post('/registro',usuariosController.processRegistro);
router.get('/ingreso',usuariosController.ingreso);


module.exports = router;