var express = require('express');
var path = require('path');
var spaRoute = require('./utils/spa-server-route');
var mongoose = require('mongoose');
var truckAPIRouter = require('./routes/truckRoutes');

mongoose.connect('mongodb://localhost/foodTruckAPI');

var app = express();
var port = process.env.PORT || 3000;
var root = path.resolve(__dirname, 'public');

app.use(express.static(root));
app.use('/api/trucks', truckAPIRouter);
app.use(spaRoute(path.resolve(root, 'index.html')));

app.listen(port, function () {
  console.log('listening on port ', port);
});