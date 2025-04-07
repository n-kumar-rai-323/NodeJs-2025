const bcrypt = require("bcryptjs");
const genHash = (text) => {
  return bcrypt.hashSync(text, Number(process.env.SALT_ROUND));
};

const compareHash = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword); // Synchronous comparison
};

module.exports = { genHash, compareHash };
