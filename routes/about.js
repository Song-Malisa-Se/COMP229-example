var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('about', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('about', { title: 'Services' });
});


/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('about', { title: 'Contact' });
});

module.exports = router;
