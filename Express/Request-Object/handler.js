const handler = (req, res) => {
  console.log(req.cookies);
  console.log(req.route);
  console.log(req.accepts("json"));
  console.log(req.get("accept"));
  if (req.accepts("json")) {
    res.send("Accept Json");
  } else {
    res.send("Accept Others");
  }
  //   res.send("This is handler");
};
module.exports = handler;
