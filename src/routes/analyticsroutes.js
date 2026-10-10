const Router = require('express').Router()
const analyticsController = require('../controllers/analytics.controller')

Router.get('/product', analyticsController.productAnalytics)
Router.get('/cart', analyticsController.cartAnalatics)

module.exports = Router
