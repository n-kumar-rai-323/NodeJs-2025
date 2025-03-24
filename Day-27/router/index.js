const router = require("express").Router();
const userRoute = require("../module/users/user.route");
router.use("/users", userRoute);
module.exports = router;
