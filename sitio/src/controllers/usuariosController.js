let dbProducts = require('../data/dbproductos');
const users = require('../data/dbusers');
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const { validationResult } = require('express-validator');

module.exports = { //exporto un objeto literal con todos los metodos
    registro:function(req,res){
        res.render('formRegistro',{
            title: "Registro de usuario",
            css:"style.css",
            
        })
    },

    ingreso: function (req, res, next){
        res.render('formIngreso', {
            css:"style.css",
            title: "Inicio de sesión",
            
        })
    },
    
    /* Proceso de Registro */
    processRegistro:function(req, res){
        let errors= validationResult(req);
        //if(errors.isEmpty()){
            /*let nuevoUsuario={
                id:lastid +1,
                firstName: req.body.nombre,
                lastName: req.body.apellido,
                email: req.body.email,
                //avatar:req.files[0].filename,
                password: bcrypt.hashSync(req.body.pass,10),
                adress: "sin especificar",
                city: "sin especificar",
                numberPhone : 1141617154
            };*/
            
    if(errors.isEmpty()){
            console.log(req.body)
            db.Usuarios.create({
                nombre: req.body.nombre.trim(),
                apellido: req.body.apellido.trim(),
                email: req.body.email.trim(),
                //avatar:(req.files[0])?req.filename[0]:"default.png",
                contraseña: bcrypt.hashSync(req.body.pass.trim(),10),
                //direccion:req.body.direccion.trim(),
                //ciudad: req.body.Ciudad.trim(),
            })
            .then(result => {
                
                return res.redirect('/usuarios/ingreso')
            })
            .catch(errores => {
                errors = {};
                errores.errors.forEach(error => {
                    if(error.path == "nombre"){
                        errors["nombre"]= {};
                        errors["nombre"]["msg"]= error.message
                    };
                    if(error.path == "apellido"){
                        errors["apellido"] = {};
                    errors["apellido"]["msg"] = error.message
                };
                if(error.path == "email"){
                    errors["email"] = {};
                    errors["email"]["msg"] = error.message
                };
                if (error.path == "contraseña") {
                    errors["contraseña"] = {};
                    errors["contraseña"]["msg"] = error.message
                }    
                    
                })

            })
        }else{
            console.log(errors.errors)
            res.render("formRegistro"),{
                css : "style.css",
                title: "Registro",
                errors: errors.mapped(),
                inputs: req.body,
                
            }
        }
        
    },

        /*users.push(nuevoUsuario)
        fs.writeFileSync(path.join(__dirname,'..','data','users.json'),JSON.stringify(users),'utf-8')
            return res.redirect('/usuarios/ingreso')*/


    processLogin: function(req, res, next){
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Usuarios.findOne({
                    where:{
                        email: req.body.email
                    }
            })
            .then(usuario => {
                req.session.usuario = {
                    id: usuario.idUsuario,
                    apodo: usuario.nombre + " " + usuario.apellido,
                    email: usuario.email,
                    
                }
                if(req.body.recordar){
                    res.cookie('userCongeladosGo', req.session.usuario,
                    {maxAge:1000*60*2})
                }
                return res.redirect('/usuario/ingreso')
            })
            .catch(error=>{
                res.send(error)
            })
        }else{
            res.render('formIngreso',{
                title:"Ingresá a tu cuenta",
                css: "style.css",
                errors: errors.mapped(),
                old:req.body,
                usuario: req.session.usuario
            })
        }
    },
        
        perfil:function(req, res){
            res.render('userPerfil',{
                title: "Perfil de usuario",
                productos: db.Productos.filter(producto =>{
                    return producto.category != ""

                }),
                css: "style.css",
                usuario:req.session.usuario

            })
        },
        desloguear:function(req,res){
            req.session.destroy();
            if(req.cookies.userCongeladosGo){
                res.cookie('userCongeladoGo', '', {maxAge:-1})
            }
            console.log(typeof usuario)
            return res.redirect('/perfil/usuario')
        }
}


