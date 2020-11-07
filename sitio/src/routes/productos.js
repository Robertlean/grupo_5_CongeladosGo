const express = require('express');
const router = express.Router();
const multer =require ('multer');
const path = require('path');
const sessionUserCheck = require("../middlewares/sessionUserCheck")

const storage = multer.diskStorage({

    destination:(req,file,callback)=>{
        console.log(req.body.images)
        callback(null,'public/images')
    },
    filename:(req,file,callback)=>{
        req.fileSave = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        callback(null, req.fileSave)

    }
})

const upload = multer({storage:storage});

const productosController = require('../controllers/productosController')

router.get('/listar', productosController.listar)
router.get('/detalle/:id', productosController.detalle)
//muestra el form para agregar produto
router.get('/agregar', productosController.agregar)
router.get('/cart',sessionUserCheck, productosController.carrito)
//procesa los datos y agrega producto
router.post('/agregar', upload.any(), productosController.crear)

router.get('editar/:id',productosController.formEditar)
router.put('/editar/:id',upload.any(), productosController.editar)

router.delete('/delete/:id',productosController.eliminar)

module.exports=router;