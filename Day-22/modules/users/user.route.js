const router = require("express").Router()
router.get("/",(req,res)=>{
    res.json({
        data:"Hi From Modules Routes..."
    })
})
module.exports=router