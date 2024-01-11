const express = require('express')

const { EditStore } = require('../controller/storeController');

const router = express.Router()


router.post('/updateStore/:id',EditStore)


module.exports =  router ;
