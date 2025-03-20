require("dotenv").config()
const express=require("express")
const app=express()
const PORT = Number(process.env.PORT ) || 8000

app.listen(PORT,()=>{
console.log(`Application Running ${PORT}`);
})