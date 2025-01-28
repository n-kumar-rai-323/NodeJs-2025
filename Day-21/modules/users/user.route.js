const router = require("express").Router()

router.get("/", (req, res, next) => {
    try {
        const sum = 1 + "2";
        if (!isNaN(sum)) {
            throw new Error("Database error")
        }
        res.json({
            data: `I have ${sum} number of users`
        });
    } catch (e) {
        next(e)
    }
})


router.post("/", (req, res, next) => {
    console.log(req.body)
    res.json({ data: "hello from Post users" })
})

module.exports = router;