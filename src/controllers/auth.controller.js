const authService = require("../services/auth.service");
const { loginDto, createUserDto } = require("../dtos/auth.dto");

const login = async (req, res) => {
  try {
    const credentials = loginDto(req.body);
    if (!credentials.email || !credentials.password) {
      return res.status(400).send({ message: "Email and password are required" });
    }
    const result = await authService.login(credentials);
    res.status(200).send(result);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.body || error.message || error);
  }
};

const createUser = async (req, res) => {
  try {
    const userData = createUserDto(req.body);
    await authService.createUser(userData);
    res.status(200).send("create");
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message || error);
  }
};

module.exports = { login, createUser };
