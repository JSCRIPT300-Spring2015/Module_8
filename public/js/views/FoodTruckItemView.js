'use strict';

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var Vent = require('../events/Vent');

module.exports = Backbone.View.extend({
	tagName: 'li',
	className: 'trucksList__item',
	template: TFT.foodTruckListItem,
	events: {
		'click': 'handleClick'
	},
	render: function () {

		var data = _.extend(this.model.attributes, this.model.id);

		this.$el.append(this.template(data));

		return this;
	},
	handleClick: function (e) {

		e.preventDefault();
		Vent.trigger('foodTruck:selected', { model: this.model });
	}
});