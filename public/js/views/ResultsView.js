'use strict';

var $ = require('jquery');
var _ = require('lodash');
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
  },
  showAllFoodTrucks: function () {
    if (this.listView) {
      this.listView.remove();
    }
    this.listView = new FoodTrucksView({ collection: this.collection });
    this.$el.append(this.listView.render().el);
  },
  showAllFoodTypes: function () {
    if (this.listView) {
      this.listView.remove();
    }
    this.listView = new FoodTypesView({ collection: this.collection });
    this.$el.append(this.listView.render().el);
  },
  showFoodTrucksToday: function () {
    var today = this.dayNames[new Date().getDay()];
    var todaysTrucks = new FoodTrucks(this.collection.getFoodTrucksByDay(today));

    if (this.listView) {
      this.listView.remove();
    }
    this.listView = new TodayView({ collection: todaysTrucks, today: today });
    this.$el.append(this.listView.render().el);
  },
  showFoodTrucksByFoodType: function (type) {
    var filteredTrucks;

    if (this.listView) {
      this.listView.remove();
    }

    if (type) {
      filteredTrucks = new FoodTrucks(this.collection.getTrucksByFoodType(type));
      this.listView = new TrucksByTypeView({ collection: filteredTrucks, type: type });
      this.$el.append(this.listView.render().el);
    }
  },
  showFoodTruck: function (model) {
    if (this.listView) {
      this.listView.remove();
    }

    if (model) {
      this.listView = new FoodTruckView({ model: model });
      this.$el.append(this.listView.render().el);
    }
  },
  showHome: function () {
    if (this.listView) {
      this.listView.remove();
    }
  }
});
