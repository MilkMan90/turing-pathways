var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema = new Schema({
  email: String,
  name: String,
  imgsrc: String,
  cohort: String,
  program: String,
  path: Array
});

module.exports = mongoose.model('User', userSchema);
