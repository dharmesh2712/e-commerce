const Router = require('express').Router()
const analyticsController = require('../controller/analyticscontroller')

Router.get('/product', analyticsController.productAnalytics)

module.exports = Router
