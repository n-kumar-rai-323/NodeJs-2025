require("dotenv").config();
const express = require("express");
const app = express();

const PORT = Number(process.env.PORT) || 6000;
// app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./Routers");
app.use(express.json());
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Application is Running ${PORT}`);
});
