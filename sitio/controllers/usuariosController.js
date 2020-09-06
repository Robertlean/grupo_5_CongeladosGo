
module.exports = { //exporto un objeto literal con todos los metodos
    registro:function(req,res){
        res.render('formRegistro',{
            css:"style.css"
        })
    },
    ingreso: function(req, res) {
        res.render('formIngreso',{
            css:"formIngreso.css"
        })
    }
}