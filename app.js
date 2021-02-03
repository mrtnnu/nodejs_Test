// NODE APP.JS
// http://localhost:3000/index.html

var express = require("express");
const router = require('./router/router')
var app = express(); 
//const bodyParser  = require('body-parser');

// static files
app.use(express.static(__dirname + '/public/'));

// Set view engine
app.set('view engine', 'ejs');

//use the router.
app.use("/", router);

// Starting Server
var port = process.env.PORT || 3000; 
app.listen(port, function () { 
    console.log("Server Has Started in PORT: "+port); 
});  

