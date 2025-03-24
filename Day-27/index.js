require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = Number(process.env.PORT) || 8900;

const indexRoute = require("./router");
mongoose
  .connect("mongodb://127.0.0.1:27017/myapp")
  .then((req, res) => {
    console.log("Database Connection Successfully");
  })
  .catch((req, res) => {
    console.log("Database Error");
  });

app.use("/", indexRoute);

app.listen(PORT, (req, res) => {
  console.log(`Application running ${PORT}`);
});
