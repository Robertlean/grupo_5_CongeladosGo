let productos= require('../data/dbProductos');
let db = require('../database/models')
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
        let buscar = req.query.search;
        let products = [];
        seccion = productos.filter(product => {
            return product.name.toLowerCase().includes(buscar)
        })
        products.push({
            cateoria: "los resultados para su busqueda de '" + buscar + " son:",
            productos: seccion
        });
        res.render("Productos",{
            title: "Resultado de la búsqueda",
            products:products,
            css: "style.css",
            usuario: req.session.usuario
        })
    },
    carrito:(req, res) => {
        res.render('carrito',{
            title: "Carrito de compras",
            css: "style.css",
            usuario: req.session.usuario
        })
    }
}