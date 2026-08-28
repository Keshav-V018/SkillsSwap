const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.json({ message: "SignUP page" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Running at http://localhost:${process.env.PORT}/`);
});
