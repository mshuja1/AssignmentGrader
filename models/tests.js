var mongoose = require('mongoose');
var Assignment = require('../models/assignments');

var Schema = mongoose.Schema;

var Test = new Schema(
    {
        assignment_id: {type: Schema.Types.ObjectId, ref: 'Assignment'},
        test_title: {type: String, required: true, max: 100},
        marks: {type: Number, required: true, max: 100},
        test_body: {type: String, required: true},
        pass_comment: {type: String, required: true, max: 100},
        fail_comment: {type: String, required: true, max: 100}
    }
);

module.exports = mongoose.model('Test', Test);