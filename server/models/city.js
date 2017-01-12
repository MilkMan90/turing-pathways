var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var citySchema = new Schema({
  id: Number,
  city: String,
  state: String,
  country: String,
  lat: String,
  lon: String
});

module.exports = mongoose.model('City', citySchema);
