const JWT = require("jsonwebtoken");

const genToken = (data) => {
  return JWT.sign(data, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_DURATION,
  });
};

const compareToken = (token) => {
  //   try {
  //     return JWT.verify(token, process.env.JWT_SECRET);
  //   } catch (error) {
  //     return null; // Return null if token is invalid
  //   }
};

module.exports = { genToken, compareToken };
