const bcrypt = require("bcryptjs");
const { verifyToken } = require("../utils/token");
const userModel = require("../module/users/user.model");
const genHash = (text) => {
  return bcrypt.hashSync(text, Number(process.env.SALT_ROUND));
};

const compareHash = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword); // Synchronous comparison
};

const secureAPI = (sysRole = []) => {
  return async (req, res, next) => {
    try {
      const { access_token } = req.headers;

      if (!access_token) throw new Error("Login Token not found");
      const { email } = verifyToken(access_token);
      const user = await userModel.findOne({
        email,
        isActive: true,
        isBlocked: false,
      });
      if (!user) throw new Error("User not found");
      const isValidRole = sysRole.some((role) => user?.roles.includes(role));
      if (!isValidRole) throw new Error("User unauthorized");
      else {
        req.body.updated_by = user?._id;
        next();
      }
    } catch (e) {
      next(e);
    }
  };
};

module.exports = { genHash, compareHash, secureAPI };
