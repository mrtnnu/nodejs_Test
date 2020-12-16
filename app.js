var express = require("express");
var app = express(); 

// Set view engine
app.set('view engine', 'ejs');

//===================== 
// ROUTES 
//===================== 

// Showing home page 
//app.use('/', router);
 app.get("/", function (req, res) { 
     res.render("pages/index"); 
     //res.send("HelloWorld");
 }); 

 app.get("/login", function (req, res) { 
    res.render("pages/login"); 
    //res.send("HelloWorld");
}); 

var port = process.env.PORT || 3000; 
app.listen(port, function () { 
    console.log("Server Has Started!"); 
}); 