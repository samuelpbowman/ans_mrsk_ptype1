var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req,res,next) {
  res.render('about', {title: 'Dilly Dilly'});
});

router.get('/services', function(req,res,next) {
  res.render('services', {title: 'Dilly Dilly'});
});

router.get('/contact', function(req,res,next) {
  res.render('contact', {title: 'Dilly Dilly'});
});

module.exports = router;