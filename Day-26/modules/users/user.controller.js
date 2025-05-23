const Model = require("./user.model");
const { genHash } = require("../../utils/secure");
const { genOTP } = require("../../utils/token");
const { token } = require("morgan");

const create = (payload) => {};
const register = async (payload) => {
  const { password, roles, isActive, ...rest } = payload;
  const userExist = await Model.findOne({ email: rest?.email });
  if (userExist) throw new Error("This email has already been taken");
  rest.password = genHash(password);
  const newUser = await Model.create(rest);
  if (!newUser) throw new Error("User registration failed. try again leter.");
  const myToken = genOTP();
  console.log({ myToken });
  await Model.updateOne({ email: newUser.email }, { token: myToken });
  return { data: null, msg: "Please check your email for verification" };
};
const login = (payload) => {};
const genEmailToken = (payload) => {};
const verifyEmailToken = (payload) => {};
const genForgetPasswordToken = (payload) => {};
const verifyForgetPasswordToken = (payload) => {};
const changePassword = (payload) => {};
const resetPassword = (payload) => {};
const blockUser = (payload) => {};
const list = (payload) => {};
const getById = (payload) => {};
const updateProfile = (payload) => {};

module.exports = {
  create,
  register,
  login,
  genEmailToken,
  verifyEmailToken,
  genForgetPasswordToken,
  verifyForgetPasswordToken,
  changePassword,
  resetPassword,
  blockUser,
  list,
  getById,
  updateProfile,
};
