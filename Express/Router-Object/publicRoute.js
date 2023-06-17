const express = require("express");
const publicRouter = express.Router();

const log = (req, res, next) => {
  console.log("I am everywhere");
  next();
};

publicRouter.all("*", log);

publicRouter.get("/", (req, res) => {
  res.send("Public Route");
});
publicRouter.get("/login", (req, res) => {
  res.send("Public Login Route");
});

module.exports = publicRouter;
