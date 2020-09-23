let productos= require('../data/dbProductos');
module.exports = { //exporto un objeto literal con todos los metodos
    index: function(req, res) {
        res.render('home',{
            title: 'Home - Congelados Go!',
            css:'index.css',
            productos:productos
        })
    }
}