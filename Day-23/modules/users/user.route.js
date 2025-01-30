const router = require("express").Router()

router.use("/", (req, res, next) => {

    try {
        res.json({
            data: "From module user routes"
        });
    } catch (e) {
        next(e);
    }

})

module.exports = router;