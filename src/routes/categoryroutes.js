const Router = require('express').Router()
const categoryController = require('../controllers/category.controller')

Router.post('/create',categoryController.create)

module.exports = Router
