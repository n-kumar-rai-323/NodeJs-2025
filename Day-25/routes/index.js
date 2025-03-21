const router = require("express").Router();
const roomRoute = require("../modules/rooms/room.route");
router.use("/rooms", roomRoute);
module.exports = router;
