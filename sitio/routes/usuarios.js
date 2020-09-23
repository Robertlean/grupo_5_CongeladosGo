const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController')

const upImageAvatar = require('../middlewares/upImageAvatar');

const registerValidator = require('../validator/registerValidator');
const loginValidator = require('../validator/loginvalidator');

router.get('/registro',usuariosController.registro);
router.post('/registro',upImageAvatar.any(),registerValidator,usuariosController.processRegistro);

router.get('/ingreso',usuariosController.ingreso);
router.post('/ingreso',loginValidator,usuariosController.processRegistro);


module.exports = router;