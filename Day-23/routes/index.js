const router = require("express").Router()

const userRoute = require("../modules/users/user.route");

router.use("/users", userRoute);

module.exports = userRoute;