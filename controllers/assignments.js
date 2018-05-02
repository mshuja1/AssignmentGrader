var Assignment = require('../models/assignments');

exports.getAssignment = function (req, res) {
    var assignmentData = req.body;
    if (assignmentData == null) {
        res.status(403).send('No data sent!')
    }
    try {
        Assignment.find({assignment_title: assignmentData.title, total_marks: assignmentData.total},
            'assignment_title total_marks',
            function (err, assignments) {
                if (err)
                    res.status(500).send('Invalid data!');
                var assignment = null;
                if (assignment.length > 0) {
                    var firstElem = assignments[0];
                    assignment = {
                        title: firstElem.assignment_title, marks: firstElem.total_marks,
                    };
                }
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(assignment));
            });
    } catch (e) {
        res.status(500).send('error ' + e);
    }
}

exports.insert = function(req, res) {
    var assignmentData = req.body;
    if (assignmentData == null) {
        res.status(403).send('No files uploaded');
    }
    try{
        var assignment = new Assignment({
            assignment_title: assignmentData.title,
            total_marks: assignmentData.total
        });
        console.log('Assignment Created: '  +assignment);

        assignment.save(function (err, results) {
            console.log(results._id);
            if(err)
                res.status(500).send('Invalid data!');

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(character));
        });
    } catch (e) {
        res.status(500).send('error'+e);
    }
}