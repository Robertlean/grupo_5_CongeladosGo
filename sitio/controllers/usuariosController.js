let dbProducts = require('../data/dbDataNew');
const users = require('../data/dbusers');
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');

module.exports = { //exporto un objeto literal con todos los metodos
    registro:function(req,res){
        res.render('formRegistro',{
            title: "Registro de usuario",
            css:"style.css"
        })
    },
    processRegistro:function(req, res){
        //let errors= validationResult(req);
        let lastid= 1000;
        users.forEach(user =>{
            if(user.id > lastid){
                lastid=user.id
            }
        } )
        //if(errors.isEmpty()){
            let nuevoUsuario={
                id:lastid +1,
                firstName: req.body.nombre,
                lastName: req.body.apellido,
                email: req.body.email,
                //avatar:req.files[0].filename,
                password: bcrypt.hashSync(req.body.pass,10),
                adress: "sin especificar",
                city: "sin especificar",
                numberPhone : 1141617154
            };
        //}
        users.push(nuevoUsuario)
        fs.writeFileSync(path.join(__dirname,'..','data','users.json'),JSON.stringify(users),'utf-8')
            return res.redirect('/usuarios/ingreso')

    },

    ingreso: function(req, res) {
        res.render('formIngreso',{
            title:"Ingresá a tu cuenta",
            css:"style.css",
            usuario:req.session.usuario
        })
    },

    processLogin: function(req, res){
        let errors = validationResult(req);
        if(errors.isEmpty()){
            users.forEach(usuario =>{
                if(usuario.email == req.body.email){
                    req.session.usuario = {
                       id: usuario.id,
                       apodo: usuario.nombre + " " + usuario.apellido,
                       email: usuario.email

                    }
                }
            });
            if(req.body.recordar){
                res.cookie('userCongeladosGo', req.session.usuario,{maxAge:1000*60*2})
            }
            res.redirect('/usuarios/perfil')
            }else{
                res.send(errors.mapped())
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
                productos: dbProducts.filter(producto =>{
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
            return res.redirect('/')
        }
}


