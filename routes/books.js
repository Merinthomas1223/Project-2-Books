var express = require('express');
var router = express.Router();
var booksCtrl = require('../controllers/books');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');


// GET /books
router.get('/', booksCtrl.index);
// GET /books/new
router.get('/new', booksCtrl.new);
//GET /books/id
router.get('/:id', booksCtrl.show);
// POST /books
router.post('/', booksCtrl.create);


module.exports = router;
