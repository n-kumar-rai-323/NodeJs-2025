const userModel = require("./user.model");
const { genHas, verifyHash } = require("../../utils/secure");

const create = async (payload) => {
  const { password, isActive, ...rest } = payload;
  rest.password = genHas(password);
  const result = await userModel.create(rest);
  return result;
};

const register = async (payload) => {
  const { password, roles, isActive, ...rest } = payload;
  rest.password = genHas(password);
  return userModel.create(rest);
};

module.exports = { create, register };
