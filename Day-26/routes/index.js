const router = require("express").Router();

const roomRoutes = require("../modules/rooms/room.route");
router.use("/api/v1/rooms", roomRoutes);

const orderRoutes = require("../modules/orders/order.route");
router.use("/api/v1/orders", orderRoutes);

const userRoutes = require("../modules/users/user.route");
router.use("/api/v1/users", userRoutes);

module.exports = router;
