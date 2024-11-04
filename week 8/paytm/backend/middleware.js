const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

const authMiddleware = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(403).json({ msg: "Authorization header is missing" });
  }
  const [name, token] = auth.split(" ");
  if (name !== "Bearer" || !token) {
    return res.status(403).json({ msg: "invalid token" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ msg: "Token has expired" });
    } else if (err.name === "JsonWebTokenError") {
      return res.status(403).json({ msg: "Token is invalid" });
    } else {
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
};

module.exports = authMiddleware;
