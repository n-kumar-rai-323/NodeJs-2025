require("dotenv").config()

const express = require("express");
const app = express()
const mongoose = require("mongoose")
const PORT = Number(process.env.PORT) || 5800;

const indexRoute = require("./routes")

mongoose.connect("mongodb://localhost:27017/hotel-mgmt").then(()=>{
    console.log("Database is connected")
})
.catch((e)=>{
    console.log("Database error")
})
app.use(express.json());
app.use(("/"),express.static("public"));
app.use("/", indexRoute)


app.use((err,req,res,next)=>{
    const errMsg = err ? err.toString() : "Something went wrong!";
    res.status(500).json({data:"", msg:errMsg})
})

app.listen(PORT,()=>{
    console.log(`Application Running ${PORT}`)
})