const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController')

<<<<<<< HEAD
const upImageAvatar = require('../middlewares/upImageAvatar');

const registerValidator = require('../validator/registerValidator');
const loginValidator = require('../validator/loginvalidator');

router.get('/registro',usuariosController.registro);
router.post('/registro',upImageAvatar.any(),registerValidator,usuariosController.processRegistro);

router.get('/ingreso',usuariosController.ingreso);
router.post('/ingreso',loginValidator,usuariosController.processRegistro);
=======
const sessionUserCheck = require('../middlewares/sessionUserCheck');

const registerValidator = require('../validator/registerValidator');
const loginValidator = require('../validator/loginValidator');

router.get('/registro',usuariosController.registro);
router.post('/registro',registerValidator,usuariosController.processRegistro);

router.get('/ingreso',usuariosController.ingreso);
router.post('/ingreso',loginValidator,usuariosController.processLogin);

router.get('/perfil',sessionUserCheck, usuariosController.perfil);
>>>>>>> 829f98559c932aeeb18cb984f61baa9b3c360530

router.get('/salir',usuariosController.desloguear);

module.exports = router;