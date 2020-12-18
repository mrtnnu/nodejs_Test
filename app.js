var express = require("express");
var app = express(); 
const bodyParser  = require('body-parser');
app.use(express.static(__dirname + '/public/'));


// Set view engine
app.set('view engine', 'ejs');

//==================================================
// DB Connection 
//================================================== 
const MongoClient = require('mongodb').MongoClient;
//Connection String
//const url = "mongodb://localhost:27017/";
const url = "mongodb+srv://ovega:ovegaD3v@cluster0.pjijh.mongodb.net/CRUD-Ex?retryWrites=true&w=majority";

//===================== 
// ROUTES: 
//===================== 

// Body Paser: Express middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Showing home page 
app.get("/", function (req, res) { 
    res.render("pages/index"); 
    //res.send("HelloWorld");
}); 

 app.get("/login", function (req, res) { 
    res.render("pages/login"); 
    //res.send("HelloWorld");
}); 

app.get("/registro", function (req, res) { 
    res.render("pages/registro"); 
}); 

//=================================================================
//Insert Usuarios
//=================================================================
app.post('/sign_up', function(req,res){ 
    var name = req.body.inputNombre; 
    var lname = req.body.inputApellido; 
    var email =req.body.inputEmail; 
    var pass = req.body.inputPassword; 
    var cpass =req.body.inputConfPass; 

    var data = { 
        "name": name, 
        "lastname": lname,
        "email": email, 
        "password":pass, 
        "cpassword":cpass 
    }

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("CRUD-Ex");
        dbo.collection("usuarios").insertOne(data, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });

    return res.redirect('/registro'); 
}); 

//=================
//model

//==================================
// Starting Server
//==================================
var port = process.env.PORT || 3000; 
app.listen(port, function () { 
    console.log("Server Has Started!"); 
}); 