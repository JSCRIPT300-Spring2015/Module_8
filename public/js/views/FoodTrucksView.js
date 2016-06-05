'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Vent = require('../events/Vent');
var FoodTruckItemView = require('./FoodTruckItemView');
var FoodTruckView = require('./FoodTruckView');

module.exports = Backbone.View.extend({
	className: 'allTrucksList',
 	template: TFT.allFoodTrucks,
 	_children: [],
 	render: function () {

 		this.$el.append(this.template());

 		this.collection.each(function (model) {

 			var itemView = new FoodTruckItemView({ model: model });

 			this._children.push(itemView);
 			this.$('.trucksList').append(itemView.render().el);
 		}, this);

 		return this;
 	},
 	remove: function () {

 		_.each(this._children, function (view) {
 			view.remove();
 		});
 		Backbone.View.prototype.remove.call(this);
 	}
});