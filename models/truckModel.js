var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodTruckSchema = {
	name: String,
	foodType: [String],
	payment: [String],
	schedule: [String],
	website: String,
	Facebook: String,
	Twitter: String
};

module.exports = mongoose.model('Truck', foodTruckSchema);