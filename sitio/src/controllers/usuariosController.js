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
            js:"registerValidator.js"
            
        })
    },

    ingreso: function (req, res, next){
        res.render('formIngreso', {
            css:"formRegistro.css",
            title: "Inicio de sesión",
            js:"loginValidator.js"
            
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
                pass: bcrypt.hashSync(req.body.pass.trim(),10),
                rol : "user"
            })
            .then(result => {
                
                return res.redirect('/usuarios/ingreso')
            })
            .catch(errores => {
                res.send(errores)
            })
        }else{
            console.log(errors.errors)
            res.render("formRegistro",{
                css : "style.css",
                title: "Registro",
                old: req.body,
                erroes: errors.mapped(),
                
            })
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
                    id: usuario.id_usuarios,
                    apodo: usuario.nombre + " " + usuario.apellido,
                    email: usuario.email,
                    rol:usuario.rol,
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
                js:"loginValidator.js",
                css: "style.css",
                errors: errors.mapped(),
                old:req.body
            })
        }
    },
        
        perfil:function(req, res){
            let errors = validationResult(req);
            db.Usuarios.findOne({
                where : {
                    id_usuarios : req.params.id
                }
            })
            .then(usuario => {
                res.render('userPerfil',{
                    title: "Perfil de usuario",
                    css: "style.css",
                    user: usuario,
                    js : "perfilValidator.js"
                })
            })
            .catch(error => res.send(error))
           
        },
        processPerfil: function(req, res){
            console.log(req.body)
            let errors = validationResult(req);
            if(errors.isEmpty()){
                db.Usuarios.update({
                    direccion:req.body.direccion,
                    ciudad:req.body.ciudad,
                    // pass: bcrypt.hashSync(req.body.pass.trim(), 10),
                },{
                    where: {
                        id_usuarios: req.params.id
                    }
                })
                .then(resultado =>{
                    res.redirect('/')
                })
                .catch(error => res.send(error))
            }else{
                db.Usuarios.findOne({
                    where : {
                        id_usuarios : req.params.id
                    }
                })
                .then(usuario => {
                    res.render('userPerfil',{
                        title: "Perfil de usuario",
                        css: "style.css",
                        user: usuario,
                        js : "perfilValidator.js",
                        errors: errors.mapped(),
                        old:req.body
                    })
                })
                .catch(error => res.send(error))
            }   
            
        },
    
        desloguear:function(req,res){
            req.session.destroy();
            if(req.cookies.userCongeladosGo){
                res.cookie('userCongeladoGo', '', {maxAge:-1})
            }
            return res.redirect('/')
        },
        //metodo process edit perfil
}


