require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = Number(process.env.PORT) || 7777;

const indexRoute = require("./routes");

mongoose
  .connect("mongodb://localhost:27017/hotelRoom")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((e) => {
    console.log("database error");
  });
app.use(express.json())
app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`Application Running ${PORT}`);
});
