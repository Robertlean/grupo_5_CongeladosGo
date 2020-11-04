const {check,validatorResult,body} = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('password')
    .isLength(1)
    .withMessage('Debes ingresar una contraseña'),

    /* body('email')
    .custom(function(value){
        return db.Usuarios.findOne({
            where:{
                email:value
            }
            })
            .then(user => {
                if(!user){
                    return Promise.reject('Este mail ya está registrado')
                }
            })
    }),  */

    body('password')
    .custom((value,{req})=>{
       
        return db.Usuarios.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(user => {
/*             console.log(user)
 */            if(!bcrypt.compareSync(value,user.dataValues.contraseña)){ 
                return Promise.reject('estas mal')
            }
        })
        .catch(() => {
            return Promise.reject('Credenciales inválidas')
        })
    })

]