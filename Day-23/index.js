require("dotenv").config()

const express = require("express");
const app = express()
const PORT = Number(process.env.PORT) || 5800;

const indexRoute = require("./routes")
app.use(express.json());
app.use(("/"),express.static("public"));
app.use("/", indexRoute)

app.listen(PORT,()=>{
    console.log(`Application Running ${PORT}`)
})