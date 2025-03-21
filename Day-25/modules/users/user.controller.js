const userModel = require("./user.model");
const { genHas, verifyHash } = require("../../utils/secure");
const { genToken } = require("../../utils/token");

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

const login = async (payload) => {
  const { email, password } = payload;
  const user = await userModel.findOne({ email, isActive: true });
  if (!user) throw new Error("User not found");
  const isValidPw = verifyHash(password, user?.password);
  if (!isValidPw) throw new Error("Email or Password didn't match");
  const signData = {
    name: user?.name,
    email: user?.email,
    roles: user?.roles,
  };
  return genToken(signData);
};

module.exports = { create, register, login };
