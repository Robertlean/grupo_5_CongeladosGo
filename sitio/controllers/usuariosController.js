let dbProducts = require('../data/dbDataNew');
let dbUsers = require('../data/users.json');
const users = require('../data/users');

module.exports = { //exporto un objeto literal con todos los metodos
    registro:function(req,res){
        res.render('formRegistro',{
            css:"style.css"
        })
    },
    processRegistro:function(req, res){
        let errors= validationResult(req);
        let lastid= users.length;
        if(errors.isEmpty()){
            let nuevoUsuario={
                id:lastid +1,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.apellido,
                avatar:req.files[0].filename,
                pass: bcrypt.hashSync(req.body.pass,10),
                rol:"user",
            };
        }
    },

    ingreso: function(req, res) {
        res.render('formIngreso',{
            css:"formIngreso.css"
        })
    }
}