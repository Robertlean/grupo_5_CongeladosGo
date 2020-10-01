let productos= require('../data/dbProductos');
module.exports = { //exporto un objeto literal con todos los metodos
    index: function(req, res) {
        res.render('home',{
            css:'index.css',
            productos:productos
        })
    }
}