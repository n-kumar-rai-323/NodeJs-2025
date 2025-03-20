require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = Number(process.env.PORT) || 8000;

const indexRoute = require("./routes");

mongoose
  .connect("mongodb://localhost:27017/hotel")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((e) => {
    console.log("Database error");
  });
app.use(express.json());
app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`Application Running ${PORT}`);
});
