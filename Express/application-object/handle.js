const handle = (req, res) => {
  console.log(req.app.locals.title);
  res.send("This is port request");
};
module.exports = handle;
