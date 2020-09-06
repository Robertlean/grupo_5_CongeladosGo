const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const mainController = require('../controllers/mainController')

router.get('/',mainController.index)
=======

router.get('/',function(req,res){
    res.render('index')
})
>>>>>>> 23fef12dfcad0a56482034729fffba665a37df3b

module.exports = router;