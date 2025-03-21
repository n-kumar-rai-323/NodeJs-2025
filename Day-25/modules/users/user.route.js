const router = require("express").Router();
const multer = require("multer");
const userController = require("./user.controller");

const fs = require("fs");
const path = require("path");

const uploadDir = path.join(__dirname, "public", "uploads");

// Ensure the directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("Uploads directory created.");
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Use dynamically created folder path
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Safer way to extract file extension
  },
});

const upload = multer({ storage });

router.post(
  "/register",
  upload.single("profilePic"),
  async (req, res, next) => {
    try {
      const URL = "http://localhost:8888/uploads/";
      const image = URL + req?.file?.filename;
      if (req.file.fieldname) {
        req.body.image = image;
      }
      const result = await userController.register(req.body);
      res.json({ data: result, msg: "User Registered successfully" });
    } catch (e) {
      next(e);
    }
  }
);

router.post("/login", async (req, res, next) => {
  try {
    const result = await userController.login(req.body);
    res.json({ data: result, msg: "User logged in successfully" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
