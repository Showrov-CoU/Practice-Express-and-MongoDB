const express = require("express");
// const handle = require("./handle");   //! For app.locals
const app = express();
// const admin = express();         //! For app.mountpath

app.use(express.json());
// app.use("/admin", admin);   //! For app.mountpath

// app.locals.title = "My app";   //! For app.locals

app.enable("case sensitive routing");

app.param("id", (req, res, next, id) => {
  const user = {
    Name: "Showrov",
    Age: 27,
    ID: id,
  };
  req.UserDetails = user;
  next();
});

app.set("view engine", "ejs");

app
  .route("/admin/dashboard")
  .get((req, res) => {
    res.render("pages/admin");
    // res.send("this is get");
  })
  .post((req, res) => {
    res.send("this is post");
  })
  .put((req, res) => {
    res.send("this is put");
  })
  .delete((req, res) => {
    res.send("this is delete");
  });

app.get("/about/:id", (req, res) => {
  console.log(req.UserDetails);
  res.send("hello Showrov.how are you");
});

app.all("/", (req, res) => {
  res.send("This is for all type of request");
});

// app.post("/", handle);  //! For app.locals

//! For app.mountpath
/*admin.get("/dashbord", (req, res) => {
    console.log(admin.mountpath);
  res.send("welcome to admin app");
});*/
//! For app.mountpath
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
