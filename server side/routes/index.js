var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
	res.render('index', {title: "app"});
});
//////////////////////login 
router.get('/login', function(req, res){
	res.render('login');
});

//////////////// login admin
router.post('/login/admin', function(req, res){
  var name = req.body.username;
  var password = req.body.password;
  res.send(name + ", " + password);
});
///////////////// login company 
router.post('/login/company', function(req, res){
  res.send("goood")
});
router.get('/register', function(req, res){
  res.render('register')
});

module.exports = router;