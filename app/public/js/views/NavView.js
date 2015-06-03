FTF = window.FTF || {};
FTF.NavView = (function ($, _, Backbone, Vent) {

	'use strict';

	return Backbone.View.extend({
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

})(jQuery, _, Backbone, FTF.Vent);