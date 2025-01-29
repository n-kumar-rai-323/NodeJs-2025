require("dotenv").config();
const express = require("express");
const morgan = require('morgan')
const app = express();
const PORT = Number(process.env.PORT) || 5800;
const indexRouter = require("./routes");

app.use(morgan('tiny'));
app.use(express.json());
app.use(("/resources"),express.static("public"));


app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log(`Application Running ${PORT}`);
})