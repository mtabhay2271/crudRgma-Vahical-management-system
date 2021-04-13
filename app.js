//dhsjkdhaskjdh
var express = require("express");
var path = require("path");

var vehicalsRouter = require("./routes/vehicle");

var app = new express();// vedio

// view engine setupss
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));


app.use("/vehicals", vehicalsRouter);

app.get("/", async function(req, res, next) {
  
    res.render("index");

});
// catch 404 and forward to error handler

app.listen(4000,console.log("Running on port 4000"))