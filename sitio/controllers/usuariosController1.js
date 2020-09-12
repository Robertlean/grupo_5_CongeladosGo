let dbProducts = require('../data/dbDataNew');
let dbUsers = require('../data/users.json');
const users = require('../data/users');

const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

module.exports = { //exporto un objeto literal con todos los metodos
    registro:function(req,res){
        res.render('formRegistro',{
            title:"Registro de Usuario",
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
                pass: bcrypt.hashSync(req.body.pass,10),
                rol:"user",
            };
            users.push(nuevoUsuario);
            fs.writeFileSync(path.join(__dirname,'..','data','users.json'),JSON.stringify(users),'utf-8');
            return res.redirect('/usuarios/ingreso');
            
        }else{
            res.render('formRegister',{
                title: "Registro de usuario",
                css: "formRegistrio.css",
                errors:errors.mapped(),
                old:req.body
            })

        }
    },

    ingreso: function(req, res) {
        res.render('formIngreso',{
            title:"Ingresá a tu cuenta",
            css:"formIngreso.css",
            usuario:req.session.usuario
        })
    },
    processLogin: function(req, res){
        let errors = validationResult(req);
        if(errors.isEmpty()){
            users.forEach(usuario =>{
                if(usuario.email == req.body.email){
                    req.session.usuario ={
                       id: usuario.id,
                       apodo: usuario.nombre + " " + usuario.apellido,
                       email: usuario.email

                    }
                }
            });
            if(req.body.recordar){
                res.cookie('userCongeladosGo', req.session.usuario,{maxAge:1000*60*2})
            }
            res.redirect('/')
            }else{
                res.render('formIngreso',{
                    title:"Ingresá a tu cuenta",
                    css: "",
                    errors: errors.mapped(),
                    old:req.body,
                    usuario: req.session.usuario
                })
        }
    },
        
        perfil: function(req, res){
            res.render('userperfil',{
                title: "Perfil de usuario",
                productos: dbProducts.filter(producto =>{
                    return producto.category != "visited" && producto.category != "in-sale"

                }),
                css: "",
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



