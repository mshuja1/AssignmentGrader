var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var assignment = require('../controllers/assignments');
var test = require('../controllers/tests');

var initDB = require('../controllers/init');
initDB.init();

router.get('/tests', function(req,res, next) {
    res.render('tests', { title: 'Create Test' });
});

router.post('/tests', test.insert);

router.post('/results', function(req,res,next) {
    var title = req.body.title;
    res.render('results', {title : 'Results'});
});

module.exports = router;