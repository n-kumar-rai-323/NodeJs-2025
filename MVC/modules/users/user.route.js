const router = require("express").Router()

router.get("/", (req, res) => {
    res.json({
        data:"From User Routes"
    })
})

module.exports = router;