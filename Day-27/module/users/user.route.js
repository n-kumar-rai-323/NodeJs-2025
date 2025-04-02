const multer = require("multer");
const router = require("express").Router();
const Controller = require("./user.controller");
const { validate, forgatePasswordValidation } = require("./user.validation");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "." + file?.originalname.split(".")[1]);
  },
});
const upload = multer({ storage });

router.post("/login", validate, async (req, res, next) => {
  try {
    const result = await Controller.login(req.body);
    res.json({ data: result, msg: "User logged in successfully" });
  } catch (e) {
    next(e);
  }
});

router.get("/register", upload.single("image"), async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.filename;
    }
    const result = await Controller.register(req.body);
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.post("/generate-fp-token", async (req, res, next) => {
  try {
    const result = await Controller.genForgatePasswordToken(req.body);
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.post(
  "/verify-fp-token",
  forgatePasswordValidation,
  async (req, res, next) => {
    try {
      const result = await Controller.verifyForgatePasswordToken(req.body);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }
);

router.put("/change-password", async (req, res, next) => {
  try {
    const result = await Controller.changePassword(req.body);
    res.json(result);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
