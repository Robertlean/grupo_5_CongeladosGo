const {check,validatorResult,body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('nombre')
    .isLength({
        min:1
    })
    .withMessage('Debes ingresar un nombre válido'),
    
    check('apellido')
    .isLength({
        min:1
    })
    .withMessage('Debes ingresar un apellido válido'),

    body('email')
    .custom(function(value){
        console.log(value)
        return db.Usuarios.findOne({
            where:{
                email:value
            }
            })
            .then(user => {
                console.log(user)
                if(user){
                    return Promise.reject('Este mail ya está registrado')
                }
            })
    }),
    
    check('pass')
    .isLength({
        min:6,
        max:12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('pass2')
    .custom(function(value,{req}){
        if(value != req.body.pass){
            return false
        }
        return true
    })
    .withMessage('Las contraseñas no coinciden')
]