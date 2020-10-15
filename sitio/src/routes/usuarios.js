const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController')

const sessionUserCheck = require('../middlewares/sessionUserCheck');

const registerValidator = require('../validator/registerValidator');
const loginValidator = require('../validator/loginValidator');

router.get('/registro',usuariosController.registro);
router.post('/registro',registerValidator,usuariosController.processRegistro);

router.get('/ingreso',usuariosController.ingreso);
router.post('/ingreso',loginValidator,usuariosController.processLogin);

router.get('/perfil',sessionUserCheck, usuariosController.perfil);

router.get('/logout',usuariosController.desloguear);

module.exports = router;