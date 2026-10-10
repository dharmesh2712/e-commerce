const Cart = require("../models/Cart");

const addToCart = async (cartData) => {
  return Cart.create(cartData);
};

module.exports = {
  addToCart,
};
