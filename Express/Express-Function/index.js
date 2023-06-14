const express = require("express");
const { route } = require("express/lib/router");
const morgan = require("morgan");

const app = express();

const router = express.Router();

app.use(morgan("dev"));
app.use(router);
app.use(express.json());
app.use(express.urlencoded());
app.use(
  express.static(`${__dirname}/public/`, {
    index: "home.html",
  })
);

router.get("/", (req, res) => {
  res.send("This is home page");
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("This is home page for creation");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
