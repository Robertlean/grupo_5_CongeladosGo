const productos= require('../data/dbProductos');
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
    },
    agregar:function(req,res){
        let category;
        if (req.query.category){
            categoria = req.query.category;
        }
        res.render('formProductos',{
            title:"Agregar Producto",
            category: category,
            css:"style.css",

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
}