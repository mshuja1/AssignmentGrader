var Test = require('../models/tests');
var Result = require('../controllers/results');
var Assignment = require('../controllers/assignments');

var assignmentID = Assignment.find({'assignment_title':'Fibonacci'});
assignmentID.select('_id');
assignmentID.limit(1);

assignmentID.exec(function (res, err, assignments) {
    if (err) res.status(403).send('No Assignment Found!');
});

exports.getTest = function (req, res) {
    var testData = req.body;
    if (testData == null) {
        res.status(403).send('No data sent!')
    }
    try {
        Test.find({test_title: testData.title, marks: testData.total},
            'test_title marks pass_comment fail_comment',
            function (err, tests) {
                if (err)
                    res.status(500).send('Invalid data!');
                var test = null;
                if (test.length > 0) {
                    var firstElem = tests[0];
                    test = {
                        title: firstElem.test_title, marks: firstElem.marks, pass: firstElem.pass_comment, fail: firstElem.fail_comment
                    };
                }
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(test));
            });
    } catch (e) {
        res.status(500).send('error ' + e);
    }
}

exports.insert = function(req, res) {
    var testData = req.body;
    if (testData == null) {
        res.status(403).send('No files uploaded');
    }
    try{
        var test = new Test({
            assignment_id: assignmentID,
            test_title: testData.title,
            marks: testData.marks,
            test_body: testData.code,
            pass_comment: testData.pass,
            fail_comment: testData.fail
        });
        console.log('Test Created: ' + test1.test_title);

        Result.initResults;

        test.save(function(err, results){
            console.log(results._id);
            if(err)
                res.status(500).send('Invalid data');

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(assignment));
        });
    } catch (e) {
        res.status(500).send('error'+e);
    }
}

