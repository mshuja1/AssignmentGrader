var json = require('json');
var jre = require('jre');
var assert = require('assert');

var grade = function() {
    var studentOutput = jre.spawnSync(
        ['java'],
        'Fibonnaci',
        {encoding: 'utf8'}
    ).stdout.trim();

    var solutionOutput = jre.spawnSync(
        ['java'],
        'Fibsolution',
        {encoding: 'utf8'}
    ).stdout.trim();

    checkOutput(studentOutput, solutionOutput, "Great job!", "Wrong answer", 100);
}

var checkOutput = function(stuOut, solOut, posFeed, negFeed, marks) {

}