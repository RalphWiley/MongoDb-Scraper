var express = require("express");
var expressHandlebars = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");
var mongodb = require("mongodb");
mongoose.Promise = Promise;

var PORT = process.env.PORT || 3000;
var app = express();
// var router = express.Router();

app.use(express.static("public"));

require("./config/routes.js")(app);

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    res.render("index", {});
});
    
app.use(bodyParser.urlencoded({
    extended: true 
}));

var db = process.env.MONGODB_URI || "mongodb://heroku_nxs57bwp:ecpbtogcs960ior0fpnl7fmdi9@ds235850.mlab.com:35850/heroku_nxs57bwp";

mongoose.connect(db, function(error) {
    if (error) {
        console.log(error);
    }

else {
    console.log("mongoose connection is successful");
}

});

app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});