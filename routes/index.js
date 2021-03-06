var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var assignment = require('../controllers/assignments');
var initDB = require('../controllers/init');
initDB.init();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Create Assignment' });
});

router.post('/index', assignment.insert);

/* POST Upload results*/
/* method obtained from: */

router.post('/upload', function (req, res, next) {
    // create an incoming form object
    var form = new formidable.IncomingForm();

    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = true;

    // store all uploads in the /uploads directory
    form.uploadDir = path.join(__dirname, '/uploads');

    // every time a file has been uploaded successfully,
    // rename it to it's orignal name
    form.on('file', function(field, file) {
        fs.rename(file.path, path.join(form.uploadDir, file.name));
    });

    // log any errors that occur
    form.on('error', function(err) {
        console.log('An error has occured: \n' + err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function() {
        res.end('success');
    });

    // parse the incoming request containing the form data
    form.parse(req);
});

router.post('/tests', function(req,res,next) {
   var title = req.body.title;
   res.render('tests', {title : title});
});

module.exports = router;