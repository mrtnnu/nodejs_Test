const express = require('express');
var app = express(); 

const router = express.Router();

//const MongoClient = require('mongodb').MongoClient;
//const url = "mongodb+srv://ovega:ovegaD3v@cluster0.pjijh.mongodb.net/CRUD-Ex?retryWrites=true&w=majority";

// Body Paser: Express middleware
//const bodyParser  = require('body-parser');
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({
//    extended: true
//}))

router.get('/', (req, res) =>{
    res.render('pages/index');
});

router.get('/login', function(req, res) {
    res.render('pages/login');
    //res.send('Contact Us');
});

router.get('/signup', function(req, res) {
    res.render('pages/signup');
});

router.get('/rescon', function(req, res) {
    res.render('pages/reset-password');
});

router.get("/tablero", function (req, res) { 
    res.render("pages/dashboard/index"); 
});
router.get("/ajustes", function (req, res) { 
    res.render("pages/dashboard/ajustes"); 
});  
router.get("/clientes", function (req, res) { 
    res.render("pages/dashboard/clientes"); 
}); 
// router.get('/sign_up', function(req, res) {
//     res.send("HelloWorld");
// });
//---------------------------------------
const fetch = require("node-fetch");
router.get('/test', function(req, res) {
    var name='vega.obed@gmail.com';
    var pass='obedvega';
    //
    //res.render('pages/test');
//    name = callMeMayBe(name);
//    console.log("Respuesta de la funcion:"+name);
//    res.jsonp({ name: name }); 
//fetch('http://localhost:3000/api')
    fetch('http://localhost:4000/findUser?email='+name+'&pass='+pass)
// Handle success\
    .then(response => response.json())  // convert to json
    //.then(json => console.log(json))    //print data to console
    .then(data => {
        // do something with your data
        console.log(data.name)
      })
//    .then(json => {
//        var obj = JSON.parse(json);
//        console.log(obj.name);
//    })
    .then(json => res.send(json))

  // .then(response => jsonParser(response))
    //.then((response) => {
    //    var stringJson = JSON.stringify(response.name);
    //    console.log(stringJson)
        //jsonParser(string)
        //console.log(json.name);
        // expected output: "Success!"
    //  })
 //   .then(json => stringJson = JSON.stringify(response.name);)
    .catch(err => console.log('Request Failed', err)); // Catch errors


});
router.get('/test1', function(req, res) {
    var txt = '{"name":"John", "age":30, "city":"New York"}'
    var obj = JSON.parse(txt);
    console.log(obj.name);
    res.send(obj)
    //jsonParser();
});

function jsonParser() {
    var txt = '{"name":"John", "age":30, "city":"New York"}'
    var obj = JSON.parse(txt);
    console.log(obj.name);
//    var string = JSON.stringify(stringValue);
//    var objectValue = JSON.parse(string);
//    console.log('nombre: '+objectValue['name'])
    //return objectValue['name'];
 }

router.get('/api', function(req, res){
    var name='vega.obed@gmail.com';
    res.jsonp({ name: name }); 
    //res.end(JSON.stringify({ a: 1 }));
    //res.send("API");
    //console.log('API');
});

function callMeMayBe(email)
{
    var flag;
    //ongoClient.connect(url, function(err, db) {
        
        //if (err) throw err;
        // var dbo = db.db("CRUD-Ex");
        // var findUserEmail = {"email": email }
        // dbo.collection("usuarios").find(findUserEmail).toArray((err, result)=> {
        //     if (result.length > 0 ){
        //         flag = "YES";
        //         console.log("flag 1:"+flag);
        //         return result;
        //     }else{
        //         flag = "NO";
        //         console.log("flag 1:"+flag);
        //     }
        //})//.catch((err) => {
         //   console.log(err);
        //}).finally(() => {
          //  db.close();
     //   });
    //});   
    //console.log("flag 2:"+flag);
}
//---------------------
router.post("/validaLogin", urlencodedParser, function (req, res){
    //console.log(req.body.useremail);
    var email = req.body.useremail; 
    var pass = req.body.password;
    console.log('Si llego');
    console.log('email: '+email);
    console.log('pass: '+pass);

    //res.redirect("/");
    //res.render('pages/login');
});

//Registro de Usuario
router.route("/sign_up").post(function(req, res){
//app.post('/sign_up', function(req,res){ 
    var name = req.body.inputNombre; 
    var lname = req.body.inputApellido; 
    var email =req.body.inputEmail; 
    var pass = req.body.inputPassword; 
    var cpass =req.body.inputConfPass; 

    console.log(name);
    console.log(lname);
    console.log(email);
    console.log(pass);
    console.log(cpass);
});

module.exports = router
 