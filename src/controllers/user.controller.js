const userService = require("../services/user.service");
const { uploadProfileDto, getUsersDto } = require("../dtos/user.dto");

const uploadProfile = async (req, res) => {
  try {
    const { userId, profilePhoto } = uploadProfileDto(req.params, req.file);
    const user = await userService.uploadProfile(userId, profilePhoto);
    res.status(200).send(user);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message || error);
  }
};

const getUser = async (req, res) => {
  try {
    const pagination = getUsersDto(req.query);
    const users = await userService.getUsers(pagination);
    res.status(200).send(users);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message || error);
  }
};

module.exports = { uploadProfile, getUser };
