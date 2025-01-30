const router = require("express").Router()

const usersRoute =require("../modules/users/user.route")
router.use("/users",usersRoute);

module.exports = router;