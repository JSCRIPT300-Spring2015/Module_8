FTF = window.FTF || {};
FTF.FoodTruck = (function ($, _, Backbone) {

	'use strict';

	return Backbone.Model.extend({
	 	idAttribute: '_id',
	 	defaults: {
	 		foodTypes: [],
	 		payment: [],
	 		schedule: [],
	 		description: '',
	 		website: '',
	 		Facebook: '',
	 		Twitter: ''
	 	}
	 });

})(jQuery, _, Backbone);