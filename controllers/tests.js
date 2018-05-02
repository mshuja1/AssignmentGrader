var Test = require('../models/tests');

exports.getTest = function (req, res) {
    var testData = req.body;
    if (testData == null) {
        res.status(403).send('No data sent!')
    }
    try {
        Test.find({test_title: assignmentData.title, marks: assignmentData.total},
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
    if (testtData == null) {
        res.status(403).send('No files uploaded');
    }
    try{
        var test = new Test({
            test_title: testData.title,
            marks: testData.marks,
            test_body: testData.code,
            pass_comment: testData.pfeedback,
            fail_comment: testData.nfeedback
        });
        console.log('Test Created: '  + test);

        test.save(function (err, results) {
            console.log(results._id);
            if(err)
                res.status(500).send('Invalid data!');

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(test));
        });
    } catch (e) {
        res.status(500).send('error'+e);
    }
}