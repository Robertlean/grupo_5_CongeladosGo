let productos= require('../data/dbProductos');
//const dbDatanew = require('../data/dbDataNew');

const fs = require('fs');
const path = require('path');

module.exports = { //exporto un objeto literal con todos los metodos
    listar:function(req,res){
        res.send(productos)
        //res.render('productos', {
        //    title: "Todos los Productos",
        //    productos: productos,
        //    css:"index.css"
        //}) //muestra información de prueba
    },
    detalle: function(req, res) {
        idProducto = req.params.id;
        let producto = productos.filter(producto=>{
            return producto.id == idProducto
        })
        res.render('detallesProducto',{
            css:"styledetallesProductos.css",
            producto: producto[0]
        })
    }
}