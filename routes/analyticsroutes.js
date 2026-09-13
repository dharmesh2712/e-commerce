const Router = require('express').Router()
const analyticsController = require('../controller/analyticscontroller')

Router.get('/product', analyticsController.productAnalytics)
Router.get('/cart', analyticsController.cartAnalatics)



module.exports = Router
