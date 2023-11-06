const jwt = require("jsonwebtoken");

exports.verifyAccessToken = (req, res, next) => {
  const token = req.header("Authorization");
  console.log("token", token);
  if (!token) {
    res.status(401).json({ code: 401, message: "Access Token이 없습니다." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        res
          .status(401)
          .json({ code: 401, message: "Access Token이 만료되었습니다" });
      } else {
        res
          .status(401)
          .json({ code: 401, message: "토큰 검증에 실패했습니다." });
      }
    } else {
      next();
    }
  });
};
