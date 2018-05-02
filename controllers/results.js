var Result = require('../models/results');
var Assignment = require('../models/assignments');
var Test = require('..models/tests');
var assert = require('assert');

exports.displayResults = function (req, res) {
    var studentOutput = jre.spawnSync(
        ['java'],
        'Fibonnaci',
        {encoding: 'utf8'}
    ).stdout.trim();

    var solutionOutput = jre.spawnSync(
        ['java'],
        'FibSolution',
        {encoding: 'utf8'}
    ).stdout.trim();

    finalFeedback = getComment(studentOutput, solutionOutput, "Great job!", "Wrong answer");
    marksObtained = getMarks(studentOutput, solutionOutput, 100);
    try{
        var result = new Result({
            test_id:"",
            result_title: "",
            marks_obtained: marksObtained,
            feedback: finalFeedback
        });
        console.log('Result Created: '  + result);

        test.save(function (err, results) {
            console.log(results._id);
            if(err)
                res.status(500).send('Invalid data!');

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(result));
        });
    } catch (e) {
        res.status(500).send('error'+e);
    }
}

getComment = function(stuOut, solOut, pFeed, nFeed) {
    var correctAnswer = assert.equal(stuOut, solOut);
    var feedback = ""

    if (correctAnswer) feedback = pFeed;
    else feedback = nFeed;

    return feedback;
}

getMarks = function(stuOut, soluOut, marks) {
    final = 0;
    var correctAnswer = assert.equal(stuOut, solOut);

    if(correctAnswer) final += marks;

    return final;
}

exports.initResults = function(testID, testTitle) {
    try{
        var result = new Result({
            test_id: testID,
            result_title: testTitle,
            marks: 0,
            feedback: ""
        });
        console.log('Result Created: '  + result);

        result.save(function (err, results) {
            console.log(results._id);
            if(err)
                res.status(500).send('Invalid data!');

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(result));
        });
    } catch (e) {
        res.status(500).send('error'+e);
    }
}