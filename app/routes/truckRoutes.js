var express = require('express');
var Truck = require('../models/truckModel');

var router = express.Router();

router.route('/')
	.get(function (request, response) {
		Truck.find(function (error, trucks) {
			if (error) {
				response(500).send(error);
			} else {
				response.send(trucks);
			}
		});
	});

router.route('/:id')
	.get(function (request, response) {
		var id = request.params.id;

		Truck.findById(id, function (error, truck) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.send(truck);
			}
		})
	});

module.exports = router;