const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    //res.send('Index');
    res.render('pages/index');
});

router.get('/login', function(req, res) {
    //res.render('pages/login');
    //res.send('Contact Us');
});

router.get('/signup', function(req, res) {
    res.render('pages/signup');
});

router.get('/rescon', function(req, res) {
    res.render('pages/reset-password');
});
app.get("/tablero", function (req, res) { 
    res.render("pages/dashboard/index"); 
}); 
// router.get('/sign_up', function(req, res) {
//     res.send("HelloWorld");
// });


module.exports = router
