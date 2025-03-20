const userModel = require("./user.model");
const { genHas, verifyHash } = require("../../utils/secure");

const create = async (payload) => {
  const { password, roles, isActive, ...rest } = payload;
  rest.password = genHas(password);

  console.log({ rest });
  const result = await userModel.create(rest);
  return result;
};

module.exports = { create };
