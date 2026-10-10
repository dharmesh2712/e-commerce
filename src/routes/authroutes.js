const Router = require('express').Router()
const authController = require('../controllers/auth.controller')

Router.post('/login', authController.login)
Router.post('/create', authController.createUser)

module.exports = Router
