var json = require('json');
var jre = require('jre');

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

    checkOutput(studentOutput, solutionOutput, )
}