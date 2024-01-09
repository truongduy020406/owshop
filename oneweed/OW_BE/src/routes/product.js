const express = require('express')
const {

  getProductById, getAllProduct, getProductBySubCategory,CreateProduct,EditProduct,deleteProduct
} = require('../controller/productController')
const upLoad = require("../middleware/cloudinary");

const router = express.Router()

router.get('/', getAllProduct)
router.get('/subcategory/:id', getProductBySubCategory)
router.post('/creteProduct', upLoad.single('img'),CreateProduct)
router.post('/editProduct/:id',EditProduct)
router.post('/deleteProduct/:id',deleteProduct)


module.exports =  router ;
