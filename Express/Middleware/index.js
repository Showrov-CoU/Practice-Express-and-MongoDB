const express = require("express");
const cookieParse = require("cookie-parser");
const app = express();
const adminRouter = express.Router();

app.use(express.json()); //! Build-in Middleware
app.use(cookieParse()); //! Third-party Middleware

app.use("/admin", adminRouter);

//! Middleware Function start
const logger = (req, res, next) => {
  console.log(
    `${new Date(Date.now()).toLocaleString()}---${req.method}---${
      req.originalUrl
    }---${req.protocol}---${req.ip}`
  );
  next();
  //   throw new Error("This is an Error");
};
//! Middleware Function end

//! configurable Middleware
const loggerWraper = (option) => {
  return function (req, res, next) {
    if (option.log) {
      console.log(
        `${new Date(Date.now()).toLocaleString()}---${req.method}---${
          req.originalUrl
        }---${req.protocol}---${req.ip}`
      );
      next();
    } else {
      throw new Error("Failed to log");
    }
  };
};
adminRouter.use(loggerWraper({ log: false })); //! Router level Middleware

adminRouter.get("/dashboard", (req, res) => {
  res.send("Admin Page");
});

app.use(logger); //! Application level Middleware
app.get("/about", (req, res) => {
  res.send("About Page");
});

//! Error handling Middleware
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("This is server side error");
};
adminRouter.use(errorHandlerMiddleware);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
