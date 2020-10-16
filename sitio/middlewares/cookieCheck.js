module.exports = function(req,res,next){
    if(req.cookies.congeladosGo){
        req.session.usuario = req.cookies.congeladosGo;
        next()
    }else{
        next()
    }
}