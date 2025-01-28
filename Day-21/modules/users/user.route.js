const router = require("express").Router()

// router.get("/", (req, res, next) => {
//     try {
//         const sum = 1 + "2";
//         if (!isNaN(sum)) {
//             throw new Error("Database error")
//         }
//         res.json({
//             data: `I have ${sum} number of users`
//         });
//     } catch (e) {
//         next(e)
//     }
// })
const verify = (req, res, next) => {
    const role = req.headers.role;
    if (role === "admin") {
        next();
    } else {
        throw new Error("You are not authorized")
    }
};

router.get("/role", verify, (req, res, next) => {
    try {
        res.json({ data: `i have 2 number of users` })
    } catch (e) {
        next(e)
    }
})

router.post("/", (req, res, next) => {
    try {
        console.log(req.body)
        let sum = 2 + "2";
        if (!isNaN(sum)) {
            throw new Error("Sorry Darling")
        }

        res.json({ data: "hello from Post users" })
    } catch (e) {
        next(e)
    }

})

module.exports = router;