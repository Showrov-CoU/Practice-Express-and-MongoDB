const mongoose = require("mongoose");
const dbConnect = mongoose
  .connect("mongodb://127.0.0.1:27017/JWT")
  .then(() => {
    console.log("DB is connect Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = dbConnect;
