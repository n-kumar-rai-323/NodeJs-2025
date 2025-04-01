require("dotenv").config();
const express = require("express");
const app = express();
const PORT = Number(process.env.PORT) || 6088;

app.listen(PORT, (req, res) => {
  console.log(`Application running ${PORT}`);
});
