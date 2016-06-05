'use strict';

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var Vent = require('../events/Vent');

module.exports = Backbone.View.extend({
	tagName: 'li',
	className: 'foodTypesList__item',
	template: TFT.foodTypeListItem,
	initialize: function (options) {

		if (options) {
			this.type = options.type;
		}
	},
	events: {
		'click': 'handleClick'
	},
	render: function () {

		var data = { type: this.type };

		this.$el.append(this.template(data));

		return this;
	},
	handleClick: function (e) {

		e.preventDefault();
		Vent.trigger('foodType:selected', { type: this.type });
	}
});