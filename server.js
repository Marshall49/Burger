var express = require("express");
var bodyParser = require("body-parser");
var exphbs  = require('express-handlebars');
var methodOverride = require("method-override");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static("public"));
app.use(methodOverride("_method"));








app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
