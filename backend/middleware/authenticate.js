const { getUser } = require("../Services/jwt.js");

function requireAuth(req, res, next) {
  try {
    const token = req.cookies?.Token;
    if(!token){
      return res.status(401).json({
        success: false,
        message: "Token is UnDefined!"
      });
    }

    const payload = getUser(token);

    if (!payload) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }

    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
}

module.exports = {requireAuth};