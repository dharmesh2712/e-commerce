const cartService = require("../services/cart.service");
const { addToCartDto } = require("../dtos/cart.dto");

const addToCart = async (req, res) => {
  try {
    const cartData = addToCartDto(req.params, req.body, req.userId);
    await cartService.addToCart(cartData);
    res.status(200).send("Added to cart");
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message || error);
  }
};

module.exports = { addToCart };
