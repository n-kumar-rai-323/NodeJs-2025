const router = require("express").Router()
const multer = require('multer')








const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "." + file?.originalname.split(".")[1])
    }
})

const upload = multer({ storage })




router.get("/", (req, res) => {
    res.json({
        data: "Hi From Modules Routes..."
    })
});






router.post("/register", upload.single("profilePic"), (req, res, next) => {
    try {
        console.log({ pic: req.file });
        const URL = "http://localhost:6900/resources/uploads/";
        const myPicture= URL + req?.file?.filename;
        res.json({
            data: `User Registered successfully ${myPicture}` 
        })

    } catch (e) {
        next(e)
    }
})


module.exports = router