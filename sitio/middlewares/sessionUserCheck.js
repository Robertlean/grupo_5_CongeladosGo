
module.exports = function sessionUserCheck(req,res,next){
    if(req.session.dbusers){
        next()
    }else{
        res.redirect('/usuarios/ingreso')
    }
}