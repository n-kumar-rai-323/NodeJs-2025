const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("from user gate");
});
module.exports = router;
