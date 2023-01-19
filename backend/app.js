const express = require("express");
const app = express();
// const path = require("path"); // PATH
const PORT = 2222;

// PASSPORT
// var users = [];

// Passport Ends

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); // FOR FORM DATA
app.set("view-engine", "ejs"); // EJS

// GET REGISTER ROUTE
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

// POST REGISTER ROUTE
app.post("/send ", async (req, res) => {
  let customer = new User({
    email: req.body.email,
  });
});

console.log(customer);

// SERVER
app.listen(PORT, (req, res) => {
  console.log(`Server started on port ${PORT}`);
});
