const express = require('express')
const { register, login, updateStore, getnamestore } = require('../controller/userController')

const router = express.Router()

router.post('/signup', register)
router.post('/login', login)
router.post('/updateStore/:id', updateStore)
router.get('/getnamestore/:id', getnamestore)

module.exports = router 
