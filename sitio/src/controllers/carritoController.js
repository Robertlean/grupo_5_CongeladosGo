let productos= require('../data/dbProductos');
module.exports = { //exporto un objeto literal con todos los metodos
    carrito: function(req, res) {
        res.render('productCart',{
            css:'productCart.css',
            productos:productos
        })
    }
}