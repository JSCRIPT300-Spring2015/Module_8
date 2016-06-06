'use strict';

var Backbone = require('backbone');
var NavView = require('./NavView');
var AppRouter = require('../routers/AppRouter');
var appController = require('../controllers/AppController');
var vent = require('../events/Vent');

module.exports = Backbone.View.extend({
  events: {
    'click .logo__link': 'showHome'
  },
  initialize: function () {
    var navView = new NavView({ el: '#foodTruckNav' });
    var navigationEvents = ['allTrucks', 'foodTypes', 'today', 'foodType', 'foodTruck', 'home'];

    this.appRouter = new AppRouter({ appController: appController });

    this.navigateSelected = this.navigateSelected.bind(this);
    navigationEvents.forEach(function (event) {
      vent.on(event + ':selected', this.navigateSelected);
    }, this);

    Backbone.history.start({ pushState: true });
  },
  showHome: function (ev) {
    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('home:selected', { path: path });
  },
  navigateSelected: function (options) {
    this.appRouter.navigate(options.path);
  }
});
