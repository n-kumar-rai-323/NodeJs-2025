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



const checkRole = (sysRoles = []) => {
    return (req, res, next) => {
        try {
            const { roles: userRole = [] } = req.headers;
            console.log(userRole)
            const isValidRole = sysRoles.some((role) => userRole.includes(role));
            if (!isValidRole) throw new Error("User unauthorized");
            next();
        } catch (e) {
            next(e)
        }
    }
}

//Read all data 
router.get("/", checkRole(["admin"]), (req, res, next) => {
    try {
        res.json({ data: `I have 2 number of users` });
    } catch (e) {
        next(e);
    }
});




// router.get("/", (req, res, next) => {
//     try {
//         res.json({
//             data: "From module user routes"
//         });
//     } catch (e) {
//         next(e);
//     }

// })

router.post("/profile",checkRole(["admin"]), upload.single("ProfilePic"), (req, res, next) => {
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