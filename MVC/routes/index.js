const router = require("express").Router()

const roomRoute = require("../modules/rooms/room.route")
router.use("/rooms", roomRoute)
const userRouter = require("../modules/users/user.route");
router.use("/users", userRouter)

module.exports = router