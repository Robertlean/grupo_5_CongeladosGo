/* const { Model } = require("sequelize/types"); */

module.exports = function localsCheck(req,res,netx) {
    if(req.session.ususario){
        res.locals.usuario = req.session.usuario
    }
    netx()
}