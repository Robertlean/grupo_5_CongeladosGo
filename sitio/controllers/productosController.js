let productos= require('../data/dbProductos')
module.exports = { //exporto un objeto literal con todos los metodos
    listar:function(req,res){
        res.send(productos)
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