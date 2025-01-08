require("dotenv").config();
const express = require("express");
const app = express();
const PORT = Number(process.env.PORT) || 8000;

//GET data from to 
app.get("/", (req, res) => {
  res.json({ data: "Hello get" });
});

//POST
app.post("/", (req, res) => {
  res.json({ data: "Hello post" });
});


//PATCH
app.patch("/", (req, res) => {
  res.json({ data: "Hello patch" });
});

// PUT

app.put("/", (req, res) => {
  res.json({ data: "Hello put" });
});

//DELETE
app.delete("/", (req, res) => {
  res.json({ data: "Hello delete" });
});


app.listen(PORT, () => {
  console.log(`Application running ${PORT}`);
});
