var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var result = require('../controllers/results');

/* GET results page */
router.get('/results', function(req, res, next) {
    res.render('results', {title: 'Assignment Results'});
});

/* POST results */
router.post('/results', result.displayResults);