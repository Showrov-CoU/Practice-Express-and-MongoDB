const express = require("express");
const adminRouter = express.Router();

adminRouter.param("user", (req, res, next, id) => {
  //   const User = {
  //     name: "Showrov",
  //     Id: id,
  //   };
  //   req.adUser = User;
  req.User = id == 1 ? "is Admin" : "is not admin";
  next();
});

adminRouter.get("/:user", (req, res) => {
  //   if (req.adUser.Id == 1) {
  //     console.log(`${req.adUser.Id} is admin`);
  //   } else {
  //     console.log(`${req.adUser.Id} is not admin`);
  //   }
  console.log(req.User);
  res.send("Admin Route");
});

adminRouter.get("/login/:user", (req, res) => {
  //   let user = req.params.user;
  //   if (user == 1) {
  //     console.log(`${user} is admin`);
  //   } else {
  //     console.log(`${user} is not admin`);
  //   }
  console.log(req.User);
  res.send("Admin Login Route");
});

module.exports = adminRouter;
