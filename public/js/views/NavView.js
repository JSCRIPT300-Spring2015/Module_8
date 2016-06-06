'use strict';

var Backbone = require('backbone');
var vent = require('../events/Vent');

module.exports = Backbone.View.extend({
  events: {
    'click #allTrucks': 'handleAllTrucks',
    'click #foodTypes': 'handleFoodTypes',
    'click #today': 'handleToday'
  },
  handleAllTrucks: function (ev) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('allTrucks:selected', { path: path });
  },
  handleFoodTypes: function (ev) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('foodTypes:selected', { path: path });
  },
  handleToday: function (ev) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('today:selected', { path: path });
  }
});
