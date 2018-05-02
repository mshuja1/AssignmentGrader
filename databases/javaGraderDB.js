var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
var bcrypt = require('bcryptjs');

var mongoDB = 'mongodb://localhost:27017/javaGraderDb';

mongoose.Promise = global.Promise;
mongoose.connect(mongoDB);
var db = mongoose.connection;

db.dropDatabase();

// RestaurantClient.connect(url, function (err, db) {
//     if(err) throw err;
//     console.log("Database restaurants created!");
//     db.close();
// })

db.on('error', console.error.bind(console, 'MongoDB connection error:'));