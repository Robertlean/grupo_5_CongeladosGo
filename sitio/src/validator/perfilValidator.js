const {check,validatorResult,body} = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');

module.exports = [
    check('ciudad')
    .isLength(3)
    .withMessage('El campo ciudad debe teneral menos 3 caracteres'),

    check('direccion')
    .isLength(3)
    .withMessage('El campo dirección debe teneral menos 3 caracteres'),

]