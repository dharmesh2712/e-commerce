const mongoose = require("mongoose");
const Category = require("../models/Category");

const createCategory = async (categoryData) => {
    return await Category.create([categoryData]);
};

module.exports = {
  createCategory,
};
