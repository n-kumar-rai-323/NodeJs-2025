require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

const PORT = Number(process.env.PORT || 8999);
const indexRouter = require("./Routers");
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Application listen ${PORT}`);
});
