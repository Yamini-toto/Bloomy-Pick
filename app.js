require('dotenv').config();
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectDB = require('./db');

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));

connectDB();

// mongoose.connect('mongodb://127.0.0.1/FeedbackDB')
const FeedbackSchema = new mongoose.Schema({
  reason: {
    type: String,
    required: [true, "The reason property is missing."],
  },
  name: {
    type: String,
    required: [true, "The name property is missing."],
  },
  email: {
    type: String,
    required: [true, "The email property is missing."],
  },
  phone: {
    type: Number,
  },
  feedback: {
    type: String,
    required: [true, "The feedback property is missing."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: { expires: '1d' } // TTL index set to 1 day
  }
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

app.get("/", function (req, res) {
  res.render("Home");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});
app.post("/submit", function (req, res) {
  const newFeedback = new Feedback({
    reason: req.body.reason,
    name: req.body.fname,
    email: req.body.email,
    phone: req.body.number,
    feedback: req.body.feedback,
  });

  newFeedback.save();
  res.redirect("/");
});

app.get("/products-page", function (req, res) {
  res.render("productPage");
});

app.get("/Log-In", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index2.html"));
});
app.get("/Feedback", function (req, res) {
  Feedback.find({}).then(function (feedback) {
    res.render("Feedback", { feedback: feedback });
  });
});

mongoose.connection.on('open', () => {
  console.log('MongoDB connected...');
  // Ensure the TTL index is created
  Feedback.init().then(() => {
    console.log('TTL index created');
  }).catch(err => {
    console.error('Error creating TTL index:', err);
  });
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`server is starting at port ${port}`);
});
