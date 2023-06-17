const express = require("express");
const adminRouter = require("./admin");
const publicRouter = require("./publicRoute");
const userRouter = require("./user");

const app = express();

app.use("/admin", adminRouter);
app.use("/public", publicRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
