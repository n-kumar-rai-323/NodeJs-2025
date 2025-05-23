const router = require("express").Router();
const Controller = require("./user.controller");
router.get("/register", async (req, res, next) => {
  try {
    const result = await Controller.register(req.body);
    res.json(result);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
