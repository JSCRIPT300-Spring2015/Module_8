FTF = window.FTF || {};
FTF.FoodTypesItemView = (function ($, _, Backbone, Vent) {

	'use strict';

	return Backbone.View.extend({
		tagName: 'li',
		className: 'foodTypesList__item',
		template: _.template($('#foodTypeListItemTemplate').html()),
		initialize: function (options) {

			if (options) {
				this.type = options.type;
			}
		},
		events: {
			'click': 'handleClick'
		},
		render: function () {

			var data = { type: this.type };

			this.$el.append(this.template(data));

			return this;
		},
		handleClick: function (e) {

			e.preventDefault();
			Vent.trigger('foodType:selected', { type: this.type });
		}
	});

})(jQuery, _, Backbone, FTF.Vent);