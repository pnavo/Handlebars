var express = require("express");
var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/", function(req, res) {
  var html = "<h1>My Routes For Animals</h1>"
  html += "<p><a href='/dog'>/dog</a></p>"
  html += "<p><a href='/all-pets'>/all-pets</a></p>"
  html += "<p><a href='/all-non-pets'>/all-non-pets</a></p>"
  res.send(html)
  res.send(html)
});

app.get("/dog", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!

  // 1. Send the dog object from the animals array to the dog.handlebars file.
  res.render("dog", animals[0]);

});

app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
  var data = {
    anims: []
  };

  for(var i = 0; i < animals.length; i++){
    var currentAnimal = animals[i];
    if (currentAnimal.pet) {
      data.anims.push(currentAnimal);
      
    }
  }
  res.render("index", data)

});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 3. Send all the animals that are not pets to the index.handlebars file.
  var data = {
    anims: []
  };

  for(var i = 0; i < animals.length; i++){
    var currentAnimal = animals[i];
    if (!currentAnimal.pet) {
      data.anims.push(currentAnimal);
      
    }
  }
  res.render("index", data)
});

app.listen(port);
