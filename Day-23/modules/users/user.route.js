const router = require("express").Router()
const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "." + file?.originalname.split(".")[1])
    }
})

const upload = multer({ storage })





router.get("/", (req, res, next) => {
    try {
        res.json({
            data: "From module user routes"
        });
    } catch (e) {
        next(e);
    }

})

router.post("/profile", upload.single("ProfilePic"), (req, res, next) => {
    try {
        console.log({ pic: req.file })
        const URL = "http://localhost:6800/uploads/";
        const myPicture = URL + req?.file?.filename
        res.json({
            data: `User Profile Registered successfully ${myPicture}`
        })
    } catch (e) {
        next(e)

    }

})

module.exports = router;