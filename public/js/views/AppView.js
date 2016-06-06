'use strict';

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var NavView = require('./NavView');
var ResultsView = require('./ResultsView');
var FoodTrucks = require('../collections/FoodTrucks');

module.exports = Backbone.View.extend({
  initialize: function () {

    var foodTrucks = new FoodTrucks();
    var navView = new NavView({ el: '.foodTruckNav' });
    var resultsView = new ResultsView({ el: '.results', collection: foodTrucks });

    foodTrucks.fetch();
  }
});