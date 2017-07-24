// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var lunches = [
  {
    lunch: "Beet & Goat Cheese Salad with minestrone soup."
  }, {
    lunch: "Pizza, two double veggie burgers, fries with a big glup"
  }
];

// Routes
app.get("/", function(req, res) {
  //Handlebars sure beats this!?! 
  var html = "<h1>My Routes</h1>"
  html += "<p><a href='/weekday'>/weekday</a></p>"
  html += "<p><a href='/weekend'>/weekend</a></p>"
  html += "<p><a href='/lunches'>/lunches</a></p>"
  res.send(html)
});


app.get("/weekday", function(req, res) {
  res.render("index", lunches[0]);
});

app.get("/weekend", function(req, res) {
  res.render("index", lunches[1]);
});

app.get("/lunches", function(req, res) {
  res.render("all-lunches", {
    foods: lunches,
    eater: "david"
  });
});

// Initiate the listener.
app.listen(port);
