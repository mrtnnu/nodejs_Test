var express = require("express");
const session = require('express-session');
var app = express(); 
const bodyParser  = require('body-parser');
// var flash = require('req-flash');
// app.use(flash());

// initialize the session
app.use(session({secret: 'ssshhhhh'}));
// static files
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

app.get("/signup", function (req, res) { 
    res.render("pages/signup"); 
}); 

app.get("/rescon", function (req, res) { 
    res.render("pages/reset-password"); 
}); 
app.get("/tablero", function (req, res) { 
    res.render("pages/dashboard/index"); 
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

    return res.redirect('/signup'); 
}); 

//==============================
//Busca el Email de usuario
app.post('/validaUser', function(req,res){ 
    var msg;
    var email = req.body.inputEmail; 
    var pass = req.body.inputPassword;
    

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("CRUD-Ex");
        var findEmail = {"email": email }
        var findUser = {"email": email, "password": pass }

        dbo.collection("usuarios").find(findEmail).toArray(function(err, result) {
            if (err) {
                console.log="Contraseña Incorrecta";
                msg="Contraseña Incorrecta";
                return res.redirect("/login?msg="+msg);  
            //    throw err;
            }else{
                if (result.length > 0 ){
                    dbo.collection("usuarios").find(findUser).toArray(function(err, result){
                        //if (err) throw err;  
                        if (result.length > 0 ){
                            //console.log="Usuario Correcto"; 
                            //console.log="Contraseña Correcta"; 
                            //db.close(); 
                            return res.redirect("/tablero");
                        }else{
                            console.log="Contraseña Incorrecta";
                            msg="Contraseña Incorrecta";
                            return res.redirect("/login?msg="+msg);  
                        }      
                    });
                }else{
                    console.log("Usuario Incorrecto");
                    msg="Usuario Incorrecto";
                    //db.close();
                    return res.redirect("/login?msg="+msg); 
                }        
            }
        });
    }); 
}); 
//==================================
// Starting Server
//==================================
var port = process.env.PORT || 3000; 
app.listen(port, function () { 
    console.log("Server Has Started!"); 
}); 