const router = require("express").Router();
const userController = require("./user.controller");

router.post("/", async (req, res) => {
  const result = await userController.create(req.body);
  res.json({ data: result, msg: "User created successfully" });
});

module.exports = router;


