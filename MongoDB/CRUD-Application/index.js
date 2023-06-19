const express = require("express");
const mongoose = require("mongoose");
const router = require("./RouteHandler/todohandler");

//! express app initialization
const app = express();
app.use(express.json());

//! database connection with mongoose
mongoose
  .connect("mongodb://127.0.0.1/todos")
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => console.log(err));

//! application routes
app.use("/todo", router);

//! error handler
app.use((err, req, res, next) => {
  if (res.headerSent) {
    next(err);
  } else {
    res.status(500).json({ Error: err.message });
  }
});

app.listen("3000", () => {
  console.log("server is running on port 3000");
});
