const addToCartDto = (params, body, userId) => {
  return {
    userId,
    items: [
      {
        productId: params.productId,
        quantity: body.quantity,
      },
    ],
  };
};

module.exports = {
  addToCartDto,
};
