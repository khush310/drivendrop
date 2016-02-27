console.log("index.js is here");

var express = require('express');
var app = express();
app.get("/home", function(req, res){
    res.status(200).send("sending to 200");
});
var port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log("listing to " + port);
});

