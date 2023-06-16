const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/test", (req, res) => {
  console.log(res.headersSent);
  res.render("home.ejs", {
    name: "Bangladesh",
  });
  console.log(res.headersSent);
  //   res.send("Response Object");
});

app.get("/about", (req, res) => {
  res.location("/test");
  res.redirect("/test");

  // res.json({
  //   name: "Bangla",
  // });
});
app.get("/getset", (req, res) => {
  res.set("platform", "Showrovs App");
  console.log(res.get("platform"));
  res.end();
});

app.get("/check", (req, res) => {
  res.cookie("name", "tobi", {
    domain: "localhost",
    path: "/",
    secure: true,
  });
  res.end();
});

app.get("/user", (req, res) => {
  res.format({
    "text/plain": () => {
      res.send("Plain-Text");
    },
    "text/html": () => {
      res.render("home.ejs", {
        name: "Showrov",
      });
    },
    "application/json": () => {
      res.send({
        message: "JSON-Application",
      });
    },
    default: () => {
      res.status(406).send("Not Acceptable");
    },
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
