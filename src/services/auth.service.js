const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const JWT_SECRET = "Ls7gzMp5RgIiynajZjwOgTZpW8yfJDUTc4vTuJerCrP";

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("user not found");
    error.statusCode = 400;
    error.body = { message: "user not found" };
    throw error;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const error = new Error("credential wrong");
    error.statusCode = 400;
    error.body = { message: "credential wrong" };
    throw error;
  }

  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return { user, token };
};

const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  return User.create({ ...userData, password: hashedPassword });
};

module.exports = {
  login,
  createUser,
};
