require("dotenv").config();
const express = require("express");
const app = express();
const PORT = Number(process.env.PORT) || 8000;
const indexRouter = require("./Routers");
app.use("/", indexRouter);
app.listen(PORT, () => {
  console.log(`Application running ${PORT}`);
});
