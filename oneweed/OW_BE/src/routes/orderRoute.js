const express = require('express')
const {
  getAllOrder,CreateOrder,EditOrder,deleteOrder
} = require('../controller/OderController')

const router = express.Router()

router.get('/Orderad', getAllOrder)
router.post('/creteOrder',CreateOrder)
router.post('/editOrder',EditOrder)
router.post('/deleteOrder/:id',deleteOrder)
// router.get('/Or',getOrderByUserid)


module.exports = router ;
