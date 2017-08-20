var express = require("express");

var router = express.Router();
var db = require("../models/");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {

  db.Burger.findAll().then(function(burgerData) {
    console.log(burgerdata);
    var burgerData = {burger: burgerData}

    res.render("index", { burger_data: burgerData });
  });
});


router.post("/burgers/create", function(req, res) {
  var newburger = req.body;

  db.Burger.create({
    burger_name: newburger.burger_name,
    devoured: newburger.devoured
  }).then(function(newburger) {
    res.json(newburger);
  });
});


router.put("/burgers/update", function(req, res) {
  var update = req.body;

    db.Burger.update({
      burger_name: update.burger_name,
      devoured: update.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(updateburger) {
      res.json(updateburger);
  });
});


module.exports = router;
