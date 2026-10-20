const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const setUser = require("../Services/jwt.js");

async function handleSignup(req, res) {
  try {
    const { name, email, password, role, primarySkillArea } = req.body || {};
    console.log(req.body);
    if (!name || !email || !password || !role) {
      const user = { name, email, password, role, primarySkillArea };
      console.log(user);
      return res.status(400).json({
        succes: false,
        message: "Please fill all the required fields",
      });
    }

    if (password.length < 8 || !/[^A-Za-z0-9]/.test(password)) {
      return res.status(400).json({
        success: false,
        message: "Password must contain atleast 8 characters and one symbol",
      });
    }

    if (!["learner", "mentor"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Role Selected",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingEmail = await User.findOne({ email: normalizedEmail });
    if (existingEmail) {
      return res.json({
        success: false,
        message: "Email is already exist",
      });
    }

    const passwordHash = await bcrypt.hash(password, 13);

    const user = await User.create({
      name,
      email: normalizedEmail,
      password: passwordHash,
      role,
      primarySkillArea: primarySkillArea || undefined,
    });

    return res.status(201).json({
      success: true,
      message: "Account created Succesfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        primarySkillArea: user.primarySkillArea,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered",
      });
    }

    console.error("Signup error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong during signup",
    });
  }
}

async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter your email and passwor",
      });
    }
    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ success: false, message: "Password is incorrect!" });
    }
    user.emailVerified = true;
    const token = setToken(user);

    return res.json({
      success: true,
      message: "Login succesfully!",
      user: {
        id: user._id,
        name: user.name,
        token: token,
        email: user.email,
        role: user.role,
        primarySkillArea: user.primarySkillArea,
        emailVerified: user.emailVerified,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong during login",
    });
  }
}

module.exports = { handleSignup, handleLogin };
