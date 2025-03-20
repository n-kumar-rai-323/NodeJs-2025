const bcrypt = require("bcryptjs");

const genHas = (text) => {
  return bcrypt.hashSync(text, Number(process.env.SALT_ROUND));
};
const verifyHash = (text, hashText) => {
  return bcrypt.compareSync(text, hashText);
};

module.exports = { genHas, verifyHash };
