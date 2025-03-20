const router = require("express").Router();

const usersRoute = require("../modules/users/user.route");
router.use("/users", usersRoute);

const roomsRoute = require("../modules/rooms/room.route");
router.use("/rooms", roomsRoute);
module.exports = router;
