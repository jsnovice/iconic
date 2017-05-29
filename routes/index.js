var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Iconic' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Admin' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/logout', function(req, res, next) {
  res.redirect('/');
});

router.post('/login', function(req, res, next) {
  
  console.log(req.body);

  var uname = req.body.uname;
  var pass = req.body.pass;

  res.redirect('admin');

  //res.render('admin');
  
});

module.exports = router;
