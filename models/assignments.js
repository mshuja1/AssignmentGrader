var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Assignment = new Schema(
    {
        assignment_title: {type: String, required: true, max: 100},
        total_marks: {type: Number, required: true, max: 100}
    }
);
var assignmentModel = mongoose.model('Assignment', Assignment)

module.exports = assignmentModel;