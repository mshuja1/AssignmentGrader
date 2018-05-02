var mongoose = require('mongoose');

var Assignment = require('../models/assignments');
var Test = require('../models/assignments');

exports.init= function() {
    var assignment1 = new Assignment({
        assignment_title: 'Fibonnaci',
        total_marks: '100'
    });
    console.log('Assignment Created: ' + assignment1.assignment_title);

    assignment1.save(function (err,results) {
        console.log(results);
    });

    var test1 = new Test({
        test_title: 'Main Test',
        marks: 100,
        test_body: "",
        pass_comment: {type: String, required: true, max: 100},
        fail_comment: {type: String, required: true, max: 100}
    });
    console.log('Test Created: ' + test1.test_title);
}