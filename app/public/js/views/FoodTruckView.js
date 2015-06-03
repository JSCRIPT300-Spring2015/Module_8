FTF = window.FTF || {};
FTF.FoodTruckView = (function ($, _, Backbone) {

	'use strict';

	return Backbone.View.extend({
		className: 'truckDetail',
		template: _.template($('#foodTruckTemplate').html()),
		render: function () {

			this.$el.append(this.template(this.model.toJSON()));
			
			return this;
		}
	});

})(jQuery, _, Backbone);