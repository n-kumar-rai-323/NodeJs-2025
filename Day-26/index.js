require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgen = require("morgan");
const PORT = Number(process.env.PORT) || 7000;

const indexRouter = require("./routes");

mongoose
  .connect("mongodb://127.0.0.1:27017/HotelApplication")
  .then((req, res) => {
    console.log("Database connection successfully ");
  })
  .catch((e) => {
    console.log("Data base error");
  });

app.use(express.json());
app.use("/resources", express.static("public"));
app.use(morgen("tiny"));
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  const errMsg = err ? err.toString() : "Something went wrong";
  res.status(500).json({ data: null, msg: errMsg });
});

app.listen(PORT, (req, res) => {
  console.log(`Application Running ${PORT}`);
});
