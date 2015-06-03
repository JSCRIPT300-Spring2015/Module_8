FTF = window.FTF || {};
FTF.FoodTruckItemView = (function ($, _, Backbone, Vent) {

	'use strict';

	 return Backbone.View.extend({
	 	tagName: 'li',
	 	className: 'trucksList__item',
	 	template: _.template($('#foodTruckListItemTemplate').html()),
	 	events: {
	 		'click': 'handleClick'
	 	},
	 	render: function () {

	 		var data = _.extend(this.model.attributes, this.model.id);

	 		this.$el.append(this.template(data));

	 		return this;
	 	},
	 	handleClick: function (e) {

	 		e.preventDefault();
	 		Vent.trigger('foodTruck:selected', { model: this.model });
	 	}
	 });

})(jQuery, _, Backbone, FTF.Vent);