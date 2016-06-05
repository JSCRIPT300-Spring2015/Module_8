var express = require('express');
var mongoose = require('mongoose');
var truckAPIRouter = require('./routes/truckRoutes');

mongoose.connect('mongodb://localhost/foodTruckAPI');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use('/api/trucks', truckAPIRouter);

app.listen(port, function () {
	console.log('listening on port ', port);
});