'use strict';

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var FoodTruck = require('../models/FoodTruck');

module.exports = Backbone.Collection.extend({
 	model: FoodTruck,
 	url: '/api/trucks',
 	getFoodTypes: function () {

 		return _.uniq(_.flatten(this.map(function (model) {
 			return model.get('foodType');
 		})));
 	},
 	getTrucksByFoodType: function (type) {

 		return this.filter(function (model) {
 			return _.contains(model.get('foodType'), type);
 		});
 	},
 	getFoodTrucksByDay: function (day) {

 		return this.filter(function (model) {
 			return _.contains(model.get('schedule'), day);
 		});
 	}
});