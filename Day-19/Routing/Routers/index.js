const router = require("express").Router();

//GET data from to
router.get("/", (req, res) => {
  res.json({ data: "Hello get" });
});

//POST
router.post("/", (req, res) => {
  res.json({ data: "Hello post" });
});

//PATCH
router.patch("/", (req, res) => {
  res.json({ data: "Hello patch" });
});

// PUT

router.put("/", (req, res) => {
  res.json({ data: "Hello put" });
});

//DELETE
router.delete("/", (req, res) => {
  res.json({ data: "Hello delete" });
});

module.exports = router;
