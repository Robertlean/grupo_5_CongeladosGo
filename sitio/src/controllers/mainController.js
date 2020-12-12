let productos= require('../data/dbProductos');
let db = require('../database/models')

const {
    Op,
    where
} = require('sequelize');


module.exports = { //exporto un objeto literal con todos los metodos
    index: function(req, res, next) {
        db.Productos.findAll()
        .then(productos => {
            res.render('home',{
                css:'index.css',
                title: 'home',
                productos:productos,
                usuario: req.session.usuario            
            })
        })
        .catch(error => res.send(error))
       
    },
    search: function (req, res){

        db.Productos.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${req.query.search}%`
                }
            }

        })
        .then(productos => {
            res.render('productos',{
                title: 'Productos',
                productos : productos,
                css:"style.css",
            })
        })
        .catch(error => res.send(error))
    },
    carrito:(req, res) => {
        res.render('carrito',{
            title: "Carrito de compras",
            css: "style.css",
            usuario: req.session.usuario
        })
    }
}