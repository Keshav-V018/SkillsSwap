const express = require("express");
const {requireAuth} = require("../middleware/authenticate.js");
const {
  handleSignup,
  handleLogin,
} = require("../Controller/UserController.js");

const route = express.Router();

route.post("/signup", handleSignup);
route.post("/login",handleLogin);

module.exports = route;
