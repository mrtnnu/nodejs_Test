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

router.get('/registro', function(req, res) {
    res.render('pages/registro');
});

module.exports = router
