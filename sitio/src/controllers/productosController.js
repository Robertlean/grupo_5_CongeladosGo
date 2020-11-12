const Productos= require('../data/dbProductos');
const db = require("../database/models");
const path = require('path');
const fs = require('fs')
const {validationResult} = require("express-validator")


 module.exports = { //exporto un objeto literal con todos los metodos
    listar:function(req,res){
        db.Productos.findAll()
        .then(productos => {
            res.render('productos',{
                title: 'Productos',
                productos : productos,
                css:"style.css",
            })
        })
        .catch(error => res.send(error))
    },
    detalle: function(req, res, next) {
        
        
        db.Productos.findOne({
            where:{
                id_producto: req.params.id//cambiar
            }
        })
        .then(producto => {
         
                res.render('detallesProducto', {
                    title: producto.nombre,
                    producto : producto,
                    css:"style.css",
                    usuario: req.session.usuario
                })
            })
           
        .catch(error => {
            res.send(error)
        })

    },

    productos: function (req, res, next){
        let categorias;
        db.Categorias.findAll({ //cambiar
            attributes:["nombre"]//cambiar
        })//cambiar
        .then(elementos => {//cambiar
            categorias = elementos//cambiar
        })
        .catch(error => {//cambiar
            res.send(error)//cambiar
        })
        let productos;//cambiar

        db.Productos.findAll({//cambiar
            include:[{
                association: "Categorias"//cambiar
            }]
        })//cambiar
        .then(elementos =>{
            productos = elementos
            res.render('Productos',{
                title: "Productos",
                categorias : categorias,
                productos: productos,
                css: "styledetallesProductos.css",
                usuario: req.session.usuario
            })
        })
        .catch(error => {
            res.send(error)
        })
    },

    //Falta seguir modificando desde acá
    agregar:function(req,res, next){
        db.Categorias.findAll()
        .then(categorias =>{

            res.render('formProductos',{
                title:"Agregar Producto",
                css:"style.css",
                categorias: categorias
            })
        })
        .catch(error => {
            res.send(error)
        })        
    },

    carrito: function (req, res, next){
        res.render('Carrito',{
            css:'productCart.css',
            title:"Carrito de compras",
            usuario: req.session.usuario
        })
    },

    crear: function(req, res, next){
        let errores = validationResult(req);
        console.log(req.body)
        if (errores.isEmpty()){
            db.Productos.create({
                nombre: req.body.nombre.trim(),
                precio: req.body.precio.trim(),
                idCategoria: req.body.categoria.trim(),//cambiar
                stock: req.body.stock.trim(),
                descripcion: req.body.descripcion.trim(),
                imagen: (req.files[0] ? req.files[0].filename : "default-image.png")
            })
            .then(respuesta =>{
                res.redirect("/productos")
            })
            .catch(error => {
                res.send(error)
            })            
        }
        else{
            db.Categorias.findAll()
        .then(categorias =>{

            res.render('formProductos',{
                title:"Agregar Producto",
                css:"style.css",
                error: error.mapped(),
                inputs: req.body,
                usuario: req.session.usuario,
                categorias: categorias
            })
        })
        .catch(error => {
            res.send(error)
        })       
        }
    },

    formEditar: function (req, res, next){
        let id = req. params.id
        db.Productos.findOne({
            where:{
                id_producto:id
            }
        })
        .then(elemento => {
            res.render("EditarProducto",{
                producto: elemento,
                title : "Modificar producto",
                css: "style.css",
                usuario:req.session.usuario
            })
        })
        .catch(error => {
            res.send(error)
        })
    },

    /* publicar:function(req,res,next){
        let lastID = 1;
        productos.forEach(producto=>{
            if(producto.id > lastID){
                lastID = producto.id
            }
        })
        let newProduct = {
            id:lastID + 1,
            name:req.body.name,
            category:req.body.category,
            description:req.body.description,
            cantidadxVenta:req.body.cantidadxVenta,
            price:Number(req.body.price),
            image:(req.files[0])?req.files[0].filename:"default-image.png",
            stock:req.body.stock,
            cantidadVendidas:req.body.cantidadVendidas
        }
        productos.push(newProduct);
        
        fs.writeFileSync(path.join(__dirname,"..","data","productos.json"),JSON.stringify(productos),'utf-8')

        res.redirect('/')
    }, */
    

    
    editar:function(req, res, next){
        let idProducto = req.params.id;
        console.log(req.body)
        db.Producto.update({
           nombre: req.body.nombre,
           precio: req.body.precio,
           id_categoria: req.body.categoria,
           stock: req.body.stock,
           descripcion: req.body.stock,
           imagen: (req.files[0])?req.files[0].filename : productos.imagen,
           cantidad_ventas : req.body.cantidad
        },{
            where: {
                id_producto: idProducto
            }
        })
        .then(resultado => {
            res.redirect('/productos/listar')
        })
    },

    eliminar:function(req,res){
        let idProducto = req.params.id;
        db.Productos.destroy({
            where: {
                idProducto: idProducto
            }
        })
        res.redirect('/users/administrador')
    }
}