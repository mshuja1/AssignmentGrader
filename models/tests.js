var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Tests = new Schema(
    {
        test_title: {type: String, required: true, max: 100},
        marks: {type: Number, required: true, max: 100},
        test_body: {type: String, required: true},
        pass_comment: {type: String, required: true, max: 100},
        fail_comment: {type: String, required: true, max: 100}
    }
);

module.exports = mongoose.model('Tests', Tests);