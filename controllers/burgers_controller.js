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

  burger.create(req.body.burger_name, function(result) {

    console.log(result);
    res.redirect("/");
  });
});


router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {

    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
