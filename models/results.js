var mongoose = require('mongoose');
var Test = require('../models/tests');

var Schema = mongoose.Schema;

var Result = new Schema(
    {
        test_id: {type: Schema.Types.ObjectId, ref:'Test'},
        result_title: {type: String, required: true, max: 100},
        marks_obtained: {type: Number, required: true, max: 100},
        feedback: {type: String, required: true, max: 100},
    }
);

module.exports = mongoose.model('Result', Result);