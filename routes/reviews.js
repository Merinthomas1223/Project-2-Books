const express = require('express');
const router = express.Router();

const reviewsCtrl = require('../controllers/reviews');

//All routes start with root

router.post('/books/:id/reviews', reviewsCtrl.create);

module.exports = router;
