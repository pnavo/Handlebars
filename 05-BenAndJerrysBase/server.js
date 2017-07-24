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
var icecreams = [
  { name: "vanilla", price: 10, awesomeness: 3 },
  { name: "chocolate", price: 4, awesomeness: 8 },
  { name: "banana", price: 1, awesomeness: 1 },
  { name: "greentea", price: 5, awesomeness: 7 },
  { name: "jawbreakers", price: 6, awesomeness: 2 },
  { name: "vanilla", price: 10, awesomeness: 3 }
];

app.get("/", function(req, res) {
  var html = "<h1>My Routes For Each Flavor</h1>"
  html += "<p><a href='/icecream/vanilla'>/icecream/vanilla</a></p>"
  html += "<p><a href='/icecream/chocolate'>/icecream/chocolate</a></p>"
  html += "<p><a href='/icecream/banana'>/icecream/banana</a></p>"
  html += "<p><a href='/icecream/greentea'>/icecream/greentea</a></p>"
  html += "<p><a href='/icecream/jawbreakers'>/icecream/jawbreakers</a></p>"
  html += "<p><a href='/icecream/vanilla'>/icecream/vanilla</a></p>"
  html += "<h1>My Routes For ALL Flavor</h1>"
  html += "<p><a href='/icecreams'>/icecreams</a></p>"
  res.send(html)
  res.send(html)
});
// Routes
app.get("/icecream/:name", function(req, res) {
  var flavor = req.params.name
  for(var i = 0; i < icecreams.length ; i++){
    if(flavor === icecreams[i].name){
      res.render("icecream", icecreams[i]);
    }
  }
  console.log(flavor)
});

app.get("/icecreams", function(req, res) {
  res.render("icecreams", {
    ics: icecreams
  })
});

// Initiate the listener.
app.listen(port);
