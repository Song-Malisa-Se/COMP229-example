var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('about', { title: 'Home' });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('about', { title: 'Products' });
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
