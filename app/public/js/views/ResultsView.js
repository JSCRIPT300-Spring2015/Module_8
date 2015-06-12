'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Vent = require('../events/Vent');
var FoodTrucksView = require('./FoodTrucksView');
var FoodTypesView = require('./FoodTypesView');
var TodayView = require('./TodayView');
var TrucksByTypeView = require('./TrucksByTypeView');
var FoodTruckView = require('./FoodTruckView');
var FoodTrucks = require('../collections/FoodTrucks');

module.exports = Backbone.View.extend({
	initialize: function () {
		
		this.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		_.bindAll(this, 'showFoodTrucks', 'showFoodTypes', 'showTrucksToday',
				 'showFoodTrucksByType', 'showFoodTruck');
		Vent.on('allTrucks:selected', this.showFoodTrucks);
		Vent.on('foodTypes:selected', this.showFoodTypes);
		Vent.on('today:selected', this.showTrucksToday);
		Vent.on('foodType:selected', this.showFoodTrucksByType);
		Vent.on('foodTruck:selected', this.showFoodTruck);
	},
	showFoodTrucks: function () {

		if (this.listView) {
			this.listView.remove();
		}
		this.listView = new FoodTrucksView({ collection: this.collection });
		this.$el.append(this.listView.render().el);
	},
	showFoodTypes: function () {

		if (this.listView) {
			this.listView.remove();
		}
		this.listView = new FoodTypesView({ collection: this.collection });
		this.$el.append(this.listView.render().el);
	},
	showTrucksToday: function () {

		var today = this.dayNames[new Date().getDay()];
		var todaysTrucks = new FoodTrucks(this.collection.getFoodTrucksByDay(today));

		if (this.listView) {
			this.listView.remove();
		}
		this.listView = new TodayView({ collection: todaysTrucks, today: today });
		this.$el.append(this.listView.render().el);
	},
	showFoodTrucksByType: function (options) {

		var filteredTrucks;

		if (this.listView) {
			this.listView.remove();
		}

		if (options) {
			console.log('options: ', options);
			filteredTrucks = new FoodTrucks(this.collection.getTrucksByFoodType(options.type));
			this.listView = new TrucksByTypeView({ collection: filteredTrucks, type: options.type });
			this.$el.append(this.listView.render().el);
		}
	},
	showFoodTruck: function (options) {

		if (this.listView) {
			this.listView.remove();
		}

		if (options) {
			this.listView = new FoodTruckView({ model: options.model });
			this.$el.append(this.listView.render().el);
		}
	}
});