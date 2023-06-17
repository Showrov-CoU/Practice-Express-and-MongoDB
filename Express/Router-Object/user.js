const express = require("express");
const userRouter = express.Router();

userRouter
  .route("/profile")
  .all((req, res, next) => {
    console.log("I am loging");
    next();
  })
  .get((req, res) => {
    res.send("GET");
  })
  .post((req, res) => {
    res.send("POST");
  })
  .put((req, res) => {
    res.send("PUT");
  })
  .delete((req, res) => {
    res.send("DELETE");
  });

// userRouter.get("/profile/", (req, res) => {
//   res.send("This is user profile Route");
// });
module.exports = userRouter;
