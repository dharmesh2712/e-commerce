const Router = require('express').Router();
const productController = require('../controllers/product.controller')
const uploadMidddleware = require('../../middleware/upload')

Router.post('/create',productController.create)

Router.post('/uploadProductImage/:productId', uploadMidddleware.upload.single(
    "avatar"
  ),productController.uploadProductImage)

module.exports = Router
