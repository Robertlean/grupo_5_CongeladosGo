const {check,validatorResult,body} = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');

module.exports = [
    check('ciudad')
    .isLength(3)
    .withMessage('Debes ingresar un email válido'),

    check('direccion')
    .isLength(3)
    .withMessage('Debes ingresar una contraseña'),

]