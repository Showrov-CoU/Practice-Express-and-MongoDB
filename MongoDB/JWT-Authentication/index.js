const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./userRouter/userRouter");
const dbConnect = require("./userModel/dbConnection");

const app = express();
dotenv.config();

app.use(express.json());
app.use("/user", userRouter);

app.listen("3000", () => {
  console.log("server is running on port 3000");
});
