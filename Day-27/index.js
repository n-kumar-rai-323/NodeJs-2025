require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgen = require("morgan");
const PORT = Number(process.env.PORT) || 8900;

const indexRoute = require("./router");
mongoose
  .connect("mongodb://127.0.0.1:27017/myapp")
  .then((req, res) => {
    console.log("Database Connection Successfully");
  })
  .catch((e) => {
    console.log("Database Error");
  });
app.use(express.json());
app.use("/resources", express.static("public"));
app.use(morgen("tiny"));
app.use("/", indexRoute);

app.use((err, req, res, next) => {
  const errMsg = err ? err.toString() : "Something went wrong";
  res.status(500).json({ data: null, msg: errMsg });
});

app.listen(PORT, (req, res) => {
  console.log(`Application running ${PORT}`);
});
