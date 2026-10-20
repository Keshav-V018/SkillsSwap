const express = require("express");
const app = express();
require("dotenv").config();
const {connectDB} = require("./config/connectdb.js");
const UserRoute = require("./Routes/UserCredential.js");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",UserRoute);


connectDB();

app.get("/", (req, res) => {
  res.json({ message: "SignUP page" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Running at http://localhost:${process.env.PORT}/`);
});
