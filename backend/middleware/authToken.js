const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(200).json({
        message: "User not logged in",
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
      // console.error("decoded:", decoded);

      if (err) {
        console.error("JWT verification error:", err);
        return res.status(403).json({
          message: "Invalid token",
          error: true,
          success: false,
        });
      }

      req.userId = decoded?._id
      next();
    });
  } catch (error) {
    console.error("Error in authToken middleware:", error);
    res.status(500).json({
      message: error.message || "Internal server error",
      data: [],
      error: true,
      success: false,
    });
  }
}

module.exports = authToken;
