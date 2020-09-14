const express = require('express');
const router = express.Router();
const multer =require ('multer');

let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public/images/products')
    },
    filename:(req,file,callback)=>{
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage:storage});

const productosController = require('../controllers/productosController')

router.get('/listar', productosController.listar)
router.get('/detalle/:id', productosController.detalle)
router.get('/agregar', productosController.agregar)
router.post('/apregrar', upload.any(), productosController.agregar)


module.exports=router;

