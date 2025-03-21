const router = require("express").Router();

const roomRoute = require("../modules/rooms/room.route");
router.use("/rooms", roomRoute);

const userRoute = require("../modules/users/user.route");
router.use("/users", userRoute);
module.exports = router;
