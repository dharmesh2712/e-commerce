const Router = require('express').Router()
const Category = require('../models/category');
const categoryController = require('../controller/categorycontroller')

Router.post('/create',categoryController.create)

module.exports = Router