const Router = require('express').Router()
const authController = require('../controller/authcontroller')

Router.post('/login', authController.login)
Router.post('/create', authController.createUser)

module.exports = Router
