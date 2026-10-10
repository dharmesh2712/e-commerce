const createCategoryDto = (body, userId) => {
  return {
    name: body.name,
    type: body.type,
    createdBy: userId,
  };
};

module.exports = {
  createCategoryDto,
};
