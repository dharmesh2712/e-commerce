const Router = require('express').Router()
const cartController = require('../controller/cartcontroller')

Router.post('/add/:productId', cartController.addToCart)

module.exports = Router
