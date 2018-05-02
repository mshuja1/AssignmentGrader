var mongoose = require('mongoose');

var Assignment = require('../models/assignments');
var Test = require('../models/tests');

exports.init= function() {
    var assignment1 = new Assignment({
        assignment_title: 'Fibonacci',
        total_marks: '100'
    });
    console.log('Assignment Created: ' + assignment1.assignment_title);

    assignment1.save(function (err,results) {
        console.log(results);
    });

    var test1 = new Test({
        assignment_id: assignment1._id,
        test_title: "Default test",
        marks: 100,
        test_body: "var studentOutput = jre.spawnSync(\n" +
        "        ['java'],\n" +
        "        'Fibonacci',\n" +
        "        {encoding: 'utf8'}\n" +
        "    ).stdout.trim();\n" +
        "\n" +
        "    var solutionOutput = jre.spawnSync(\n" +
        "        ['java'],\n" +
        "        'FibSolution',\n" +
        "        {encoding: 'utf8'}\n" +
        "    ).stdout.trim();\n" +
        "\n" +
        "    checkOutput(studentOutput, solutionOutput, \"Great job!\", \"Wrong answer\", 100);",
        pass_comment: "Good job!",
        fail_comment: "Wrong answer"
    });
    console.log('Test Created: ' + test1.test_title);

    test1.save(function(err, results){
       console.log(results);
    });
}