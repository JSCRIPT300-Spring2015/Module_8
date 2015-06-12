'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Vent = require('../events/Vent');

module.exports = Backbone.View.extend({
	events: {
		'click #allTrucks': 'handleAllTrucks',
		'click #foodTypes': 'handleFoodTypes',
		'click #today': 'handleToday'
	},
	handleAllTrucks: function () {

		Vent.trigger('allTrucks:selected')
	},
	handleFoodTypes: function () {

		Vent.trigger('foodTypes:selected');
	},
	handleToday: function () {

		Vent.trigger('today:selected');
	}
});