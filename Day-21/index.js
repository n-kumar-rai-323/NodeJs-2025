require("dotenv").config();
const express = require("express");
const app = express();

const PORT = Number(process.env.PORT) || 6000;
const indexRouter = require("./Routers");
app.use(express.json());

app.use((req, res, next) => {
  req.body.Country = "NP";
  next();
});


app.use("/", indexRouter);


app.use((err, req, res, next) => {
  const errMsg = err ? err.toString() : "Something went wrong"
  res.status(500).json({ data: "", msg: errMsg });
})

app.listen(PORT, () => {
  console.log(`Application is Running ${PORT}`);
});
