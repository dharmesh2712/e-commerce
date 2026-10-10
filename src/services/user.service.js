const User = require("../models/User");

const uploadProfile = async (userId, profilePhoto) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { profilePhoto },
    { new: true }
  );

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  return user;
};

const getUsers = async ({ skip, limit }) => {
  return User.find().skip(skip).limit(limit);
};

module.exports = {
  uploadProfile,
  getUsers,
};
