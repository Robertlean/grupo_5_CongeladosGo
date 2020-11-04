let dbProducts = require('../data/dbproductos');
const users = require('../data/dbusers');
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const { validationResult, body } = require('express-validator');

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
            
    if(errors.isEmpty()){
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
                res.send(errores)
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
                return res.redirect('/')
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


