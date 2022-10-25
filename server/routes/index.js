let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/home', indexController.displayAboutPage);

/* GET Products page. */
router.get('/home', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/home', indexController.displayServicesPage);


/* GET Contact Us page. */
router.get('/home', indexController.displayContactPage);

module.exports = router;
