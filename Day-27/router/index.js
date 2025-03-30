const router = require("express").Router();
const userRoute = require("../module/users/user.route");
router.use("/api/v1/users", userRoute);
module.exports = router;
