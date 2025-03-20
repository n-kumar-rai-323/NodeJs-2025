// const router = require("express").Router();
// const roomController = require("./room.controller");

// router.post("/", async (req, res) => {
//   const result = await roomController.create(req.body);
//   res.json({ data: result, msg: "Room Created successfully" });
// });

// module.exports = router;

const router = require("express").Router();
const roomController = require("./room.controller");

// Create Room Route
router.post("/", async (req, res) => {
  try {
    const result = await roomController.create(req.body);
    res.status(201).json({ data: result, msg: "Room Created successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error creating room", error: error.message });
  }
});

module.exports = router;
