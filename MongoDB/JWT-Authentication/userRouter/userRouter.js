const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = require("../userModel/userSchema");

const userRouter = express.Router();

const User = mongoose.model("User", userSchema);

userRouter.post("/signup", async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      userName: req.body.userName,
      password: hash,
    });
    await newUser.save();
    res.status(200).json({
      message: "Signup was successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const user = await User.find({ userName: req.body.userName });
    if (user && user.length >= 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );

      if (isValidPassword) {
        //! generate jwt token
        const token = await jwt.sign(
          {
            username: user[0].userName,
            userid: user[0]._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({
          access_token: token,
          messsage: "Login successful",
        });
      } else {
        res.status(401).json({
          message: "Authentication Failed!",
        });
      }
    } else {
      res.status(500).json({
        message: "Authentication Failed!",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Authentication Failed!",
    });
  }
});

module.exports = userRouter;
