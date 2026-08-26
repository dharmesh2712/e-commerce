const Router = require('express').Router()
const userController = require('../controller/usercontroller')
const uploadMiddleware = require('../middleware/upload')

Router.post(
  '/uploadProfile/:userId',
  uploadMiddleware.upload.single('avatar'),
  userController.uploadProfile
)

module.exports = Router
