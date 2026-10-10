const productService = require("../services/product.service");
const { createProductDto, uploadProductImageDto } = require("../dtos/product.dto");

const create = async (req, res) => {
  try {
    const productData = createProductDto(req.body, req.userId);
    await productService.createProduct(productData);
    res.status(200).send("Product Created");
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message || error);
  }
};

const uploadProductImage = async (req, res) => {
  try {
    const { productId, image } = uploadProductImageDto(req.params, req.file);
    const product = await productService.uploadProductImage(productId, image);
    res.status(200).send(product);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message || error);
  }
};

module.exports = { create, uploadProductImage };
