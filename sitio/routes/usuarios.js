const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController')

router.get('/registro',usuariosController.registro);
rrouter.post('/registro',usuariosController.processRegistro);

router.get('/ingreso',usuariosController.ingreso);
router.post('/ingreso',validacion,usuariosController.processRegistro);


module.exports = router;