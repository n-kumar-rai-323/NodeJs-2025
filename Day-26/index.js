require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = Number(process.env.PORT) || 7000;

mongoose
  .connect("mongodb://127.0.0.1:27017/Hotel")
  .then((req, res) => {
    console.log("Database connection successfully ");
  })
  .catch((e) => {
    console.log("Data base error");
  });

app.listen(PORT, (req, res) => {
  console.log(`Application Running ${PORT}`);
});
