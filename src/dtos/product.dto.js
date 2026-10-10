const createProductDto = (body, userId) => {
  return {
    name: body.name,
    categoryId: body.categoryId,
    stock: body.stock,
    description: body.description,
    price: body.price,
    createdBy: userId,
  };
};

const uploadProductImageDto = (params, file) => {
  return {
    productId: params.productId,
    image: file?.path,
  };
};

module.exports = {
  createProductDto,
  uploadProductImageDto,
};
