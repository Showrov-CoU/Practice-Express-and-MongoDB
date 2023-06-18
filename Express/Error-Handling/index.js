const express = require("express");
const createError = require("http-errors");

const app = express();

app.get("/about", (req, res, next) => {
  setTimeout(() => {
    try {
      console.log(a);
    } catch (error) {
      next(error);
    }
  }, 100);
  // res.send(a);
  // res.send("Error Handling");
  // throw new Error("This is an error");
});
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

app.use((err, req, res, next) => {
  if (err.message) {
    res.status(err.status || 500).send(err.message);
  } else {
    res.send("This was an error");
  }
});
app.listen("3000", () => {
  console.log("server is running on port 3000");
});
