const express = require('express');
const router = express.Router();
const multer =require ('multer');
const sessionUserCheck = require('../middlewares/sessionUserCheck')

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

router.get('/listar',sessionUserCheck, productosController.listar)
router.get('/detalle/:id', productosController.detalle)
//muestra el form para agregar produto
router.get('/agregar', productosController.agregar)
//procesa los datos y agrega producto
router.post('/agregar', upload.any(), productosController.publicar)

<<<<<<< HEAD
/*router.get('editar/:id',productosController.forEditar)
router.put('editar/:id',productosController.editar)

router.delete('delete/:id',productosController.delete)*/
=======
//router.get('editar/:id',productosController.forEditar)
router.put('editar/:id',productosController.editar)

//router.delete('delete/:id',productosController.delete)
>>>>>>> 829f98559c932aeeb18cb984f61baa9b3c360530


module.exports=router;

