require("dotenv").config()
const express = require("express")
const app = express()

const PORT = Number(process.env.PORT) || 8900
const indexRouter = require("./routes");
app.use("/", indexRouter);

app.listen(PORT, ()=>{
console.log(`App listning ${PORT}`)
})