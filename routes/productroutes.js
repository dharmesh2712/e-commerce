const Router = require('express').Router();
const productController = require('../controller/productcontroller')
const uploadMidddleware = require('../middleware/upload')

Router.post('/create',productController.create)

Router.post('/uploadProductImage/:productId', uploadMidddleware.upload.single(
    "avatar"
  ),productController.uploadProductImage)

module.exports = Router