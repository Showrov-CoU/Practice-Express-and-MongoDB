const jwt = require("jsonwebtoken");
const checkMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    // console.log(authHeader);
    const token = authHeader && authHeader.split(" ")[1];
    // console.log(token);
    if (token == null) {
      res.sendStatus(401);
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const { username, userid } = decode;
    // console.log(username, userid);
    req.username = username;
    req.userid = userid;
    next();
  } catch (error) {
    next("Authentication failed!");
  }
};
module.exports = checkMiddleware;
