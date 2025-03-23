const router = require("express").Router();

const userRoutes = require("../modules/users/user.route");
router.use("/api/v1/users", userRoutes);



module.exports = router;
