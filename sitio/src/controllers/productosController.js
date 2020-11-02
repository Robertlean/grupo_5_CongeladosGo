const dbProductos= require('../data/dbProductos');
const db = require("../database/models");
const path = require('path');
const {validationResult} = require("express-validator")
 module.exports = { //exporto un objeto literal con todos los metodos
    listar:function(req,res){
        res.send(productos)
    },
    detalle: function(req, res, next) {
        let idProducto = req.params.id;
        
        db.Productos.findOne({
            where:{
                id: idProducto
            }
        }).then(productos => {
            db.Productos.findAll({
                where:{
                    idcategoria: productos.idcategoria
                }
            }).then(recomendacion =>{
                res.render('detallesProducto', {
                    title: Productos.nombre,
                    producto : Productos,
                    recomendaciones: recomendacion,
                    css:"style.css",
                    usuario: req.session.usuario
                })
            })
            .catch(error => {
                res.send(error)
            })
        })

    },

    productos: function (req, res, next){
        let categorias;
        db.Categorias.findAll({
            attributes:["nombre"]
        })
        .then(elementos => {
            categorias = elementos
        })
        .catch(error => {
            res.send(error)
        })
        let productos;

        db.Productos.findAll({
            include:[{
                association: "Categorias"
            }]
        })
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
        const db = require("../database/models");
        db.Categorias.findAll()
        .then(send =>{
            res.render('formProductos',{
                title:"Agregar Producto",
                category: category,
                css:"style.css",
                usuario: req.session.usuario,
                categorias: send
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
        if (errores.isEmpty()){
            db.Productos.create({
                nombre: req.body.nombre.trim(),
                precio: req.body.precio.trim(),
                idCategoria: req.body.categoria.trim(),
                stock: req.body.stock.trim(),
                descripcion: req.body.descripcion.trim(),
                imagen: (req.files[0] ? req.files[0].filename : "default-image.png")
            })
            .then(res.redirect("/products"))
            .catch(error => {
                res.send(error)
            })            
        }
        else{
            res.render("formAgregarProducto",{
                css:"style.css",
                title: "Agregar Producto",
                error: error.mapped(),
                inputs: req.body,
                usuario: req.session.usuario
            })
        }
    },

    form: function (req, res, next){
        let id = req. params.id
        db.Productos.findOne({
            where:{
                id:id
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

    publicar:function(req,res,next){
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
    },
    

    
    editar:function(req, res, next){
        let idProducto = req.params.id;

        db.Productos.update({
           nombre: req.body.nombre,
           precio: req.body.precio,
           categoria: req.body.categoria,
           stock: req.body.stock,
           descripcion: req.body.stock,
           imahen: (req.files[0])?req.files[0].filename : productos.imagen
        },{
            where: {
                idProducto: idProducto
            }
        })
    },

    eliminar:function(req,res){
        let idProducto = req.params.id;
<<<<<<< HEAD
        fb.Productos.destroy({
            where: {
                idProducto: idProducto
=======
        dbProductos.forEach(producto=>{
            if(producto.id == idProducto){
                let Eliminar = dbProducts.indexOf(producto);
                dbProductos.splice(Eliminar,1);
>>>>>>> 11efb5ef7be7603f5b299d679734b89000f8ddcd
            }
        })
        res.redirect('/users/administrador')


        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(dbProducts));
        res.redirect('/dbusers/profile')
    }
}