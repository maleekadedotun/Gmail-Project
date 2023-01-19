const express = require("express");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
// const path = require("path"); // PATH
const PORT = 2222;

// PASSPORT
// var users = [];

// Passport Ends

// body parser middleWear
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); // FOR FORM DATA
app.set("view-engine", "ejs"); // EJS

// GET REGISTER ROUTE
app.get("/", (req, res) => {
  res.render("contact.ejs");
});

// POST REGISTER ROUTE
app.post("/", (req, res) => {
  
  //  console.log(req.body);
  const client = {
    name : req.body.name,
    email : req.body.email,
    phone : req.body.phone,
    message : req.body.message,
    subject : req.body.subject
  }
  // console.log(client);

  let transporter = nodemailer.createTransport({
    host: "app.hyperbaricpipeline.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "node@app.hyperbaricpipeline.com", // generated ethereal user
      pass: "@12345...@@", // generated ethereal password
    },

    // tls: {
    //   rejectUnauthorized: false
    // }
    
  });

    from: "node@app.hyperbaricpipeline.com", // sender address
    to: "amaleekadedotun@gmail.com", // list of receivers
    subject: client.subject, // Subject line
    text: ` Name: ${client.name} <br> From: ${client.email} <br> Body: ${client.message}`, // plain text body
    html: ` Name: ${client.name} <br> From: ${client.email} <br> Body: ${client.message}`, // html body
  
  // console.log(mailOptions);

  transporter.sendMail(mailOptions, function (err, success) {

    if(err) { 
      console.log(err)
    }
    else{
      console.log("Email sent");
    }
  })
});


// SERVER
app.listen(PORT, (req, res) => {
  console.log(`Server started on port ${PORT}`);
});
