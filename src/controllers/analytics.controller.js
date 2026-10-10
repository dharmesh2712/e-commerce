const analyticsService = require("../services/analytics.service");

const productAnalytics = async (req, res) => {
  try {
    const product = await analyticsService.getProductAnalytics();
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const cartAnalatics = async (req, res) => {
  try {
    const cart = await analyticsService.getCartAnalytics();
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { productAnalytics, cartAnalatics };
