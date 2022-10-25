let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Book = require('../models/book');


let bookController = require('../controllers/book');

/* Get Route for the Book List page - READ Operation */
router.get('/', bookController.displayBookList);

/* Get Route for displaying the Add page - CREATE Operation */
router.get('/', bookController.displayAddPage);

/* Post Route for processing the Add page - CREATE Operation */
router.post('/add', bookController.processAddPage);

/* Get Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', bookController.displayEditPage); 
/* Post Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', bookController.processEditPage); 
/* Get Route to perform Book Deletion - DELETE Operation */
router.get('/delete/:id', bookController.performDelete); 

module.exports = router;