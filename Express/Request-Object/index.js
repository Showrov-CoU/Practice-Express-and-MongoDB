const express = require("express");
const cookieParser = require("cookie-parser");
const handler = require("./handler");
const app = express();
const adminRoute = express.Router();

app.use(express.json());
app.use(cookieParser());
app.use("/admin", adminRoute);

adminRoute.get("/dashboard", (req, res) => {
  console.log(req.baseUrl);
  console.log(req.originalUrl);
  res.send("This is admin Router");
});

app.get("/:id", (req, res) => {
  console.log(req.baseUrl);
  console.log(req.originalUrl);
  console.log(req.params.id);
  console.log(req.query.name);
  res.send("This is home pages");
});

app.post("/useHandler", handler);

app.post("/user", (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  console.log(req.secure);
  res.send("This is home page for creation");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
