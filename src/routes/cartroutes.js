const Router = require('express').Router()
const cartController = require('../controllers/cart.controller')

Router.post('/add/:productId', cartController.addToCart)

module.exports = Router
