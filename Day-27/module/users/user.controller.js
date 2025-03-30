const Model = require("./user.model");
const { genHash, compareHash } = require("../../utils/secure");
const { genOTP, genToken } = require("../../utils/token");
const { sendEmail } = require("../../services/mailer");

const register = async (payload) => {
  const { password, roles, isActive, ...rest } = payload;
  const userExist = await Model.findOne({ email: rest?.email });
  if (userExist) throw new Error("This email has already been taken");
  rest.password = genHash(password);
  const newUser = await Model.create(rest);
  if (!newUser) throw new Error("User registration failed. try again leter.");
  const myToken = genOTP();
  await Model.updateOne({ email: newUser.email }, { token: myToken });
  const isEmailSent = await genEmailToken({
    to: newUser?.email,
    subject: "Welcome to XYZ hotel Mgmt",
    msg: `<h1> Your OTP code for verification is ${myToken}</h1>`,
  });
  if (!isEmailSent) throw new Error("User Email sending failed...");
  return { data: null, msg: "Please check your email for verification" };
};

const genEmailToken = async ({ to, subject, msg }) => {
  const { messageId } = await sendEmail({ to, subject, htmlMessage: msg });
  return messageId ? true : false;
};

const verifyEmailTOken = async (payload) => {
  const { email, token } = payload;
  const user = await Model.findOne({ email: email, isBlocked: false });
  if (!user) throw new Error("User not found");

  const isValidToken = token === user?.token;
  if (!isValidToken) throw new Error("Invalid token");

  const updatedUser = await Model.updateOne(
    { email },
    { isActive: true, token: "" }
  );
};

const login = async (payload) => {
  const { email, password } = payload;
  const user = await Model.findOne({ email, isActive: true, isBlocked: false });
  if (!user) throw new Error("User not found");
  const isValidPW = compareHash(password, user?.password);
  if (!isValidPW) throw new Error("Username or password didn't match");
  const data = {
    name: user?.name,
    email: user?.email,
    roles: user?.roles,
  };
  return genToken(data);
};

module.exports = { register, verifyEmailTOken, login };
