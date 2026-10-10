const Product = require("../models/Product");

const createProduct = async (productData) => {
  return Product.create(productData);
};

const uploadProductImage = async (productId, image) => {
  const product = await Product.findByIdAndUpdate(
    productId,
    { image },
    { new: true }
  );

  if (!product) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }

  return product;
};

module.exports = {
  createProduct,
  uploadProductImage,
};
