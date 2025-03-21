const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("hello from room routes");
});

module.exports = router;
