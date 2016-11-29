var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tripSchema = new Schema({
  title:  String,
  date: Date,
  location: String
});

module.exports = mongoose.model('Trip', tripSchema);