const multer = require("multer");
const router = require("express").Router();
const Controller = require("./user.controller");
const { secureAPI } = require("../../utils/secure.js");
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
router.put("/reset-password", secureAPI(["admin"]), async (req, res, next) => {
  try {
    console.log("i am here");
    const { email, newPassword } = req.body;
    // Log to check if the body is being received correctly
    console.log("Request Body:", req.body);
    if (!email || !newPassword) {
      return res
        .status(400)
        .json({ msg: "Email and new password are required" });
    }

    const result = await Controller.resetPassword(req.body);
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.patch("/block", secureAPI(["admin"]), async (req, res, next) => {
  try {
    const result = await Controller.blockUser(req.body);
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.post("/", secureAPI(["admin"]), async (req, res, next) => {
  try {
    const result = await Controller.create(req.body);
    res.json({ data: result, msg: "User created successfylly" });
  } catch (e) {
    next(e);
  }
});

router.put("/profile", secureAPI(["admin", "user"]), async (req, res, next) => {
  try {
    const result = await Controller.updateProfile(req.body);
    res.json({ data: result, msg: "Profile updated successfully" });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", secureAPI(["admin"]), async (req, res, next) => {
  try {
    const result = await Controller.getById(req.params.id);
    res.json({ data: result, msg: "User detail generated successfully" });
  } catch (e) {
    next(e);
  }
});

router.put("./:id", secureAPI(["admin"]), async (req, res, next) => {
  try {
    const result = await Controller.updateById({
      id: req.params.id,
      payload: req.body,
    });
    res.json({ data: result, msg: "User data updated successfully" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
