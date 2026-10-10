const categoryService = require("../services/category.service");
const { createCategoryDto } = require("../dtos/category.dto");

const create = async (req, res) => {
  try {
    const categoryData = createCategoryDto(req.body, req.userId);
    await categoryService.createCategory(categoryData);
    res.status(200).send("Category created");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { create };
