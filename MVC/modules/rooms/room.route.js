const router = require("express").Router()


router.get("/",(req,res)=>{
    res.json({
        data:"From Room Routes"
    })
})
module.exports=router