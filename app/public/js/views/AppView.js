FTF = window.FTF || {};
FTF.AppView = (function ($, _, Backbone, NavView, ResultsView, FoodTrucks) {

	'use strict';

	return Backbone.View.extend({
		initialize: function () {

			var foodTrucks = new FoodTrucks();
			var navView = new NavView({ el: '.foodTruckNav' });
			var resultsView = new ResultsView({ el: '.results', collection: foodTrucks });
			
			foodTrucks.fetch();
		}
	});

})(jQuery, _, Backbone, FTF.NavView, FTF.ResultsView, FTF.FoodTrucks);