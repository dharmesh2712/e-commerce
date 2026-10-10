const uploadProfileDto = (params, file) => {
  return {
    userId: params.userId,
    profilePhoto: file?.path,
  };
};

const getUsersDto = (query) => {
  const page = Number(query.page);
  const limit = Number(query.limit);

  return {
    page,
    limit,
    skip: (page - 1) * limit,
  };
};

module.exports = {
  uploadProfileDto,
  getUsersDto,
};
