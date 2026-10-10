const loginDto = (body) => {
  return {
    email: body.email,
    password: body.password,
  };
};

const createUserDto = (body) => {
  return {
    role: body.role,
    name: body.name,
    email: body.email,
    password: body.password,
    phone: body.phone,
  };
};

module.exports = {
  loginDto,
  createUserDto,
};
