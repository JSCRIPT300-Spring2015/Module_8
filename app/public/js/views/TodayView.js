FTF = window.FTF || {};
FTF.TodayView = (function ($, _, Backbone, FoodTruckItemView) {

	'use strict';

	return Backbone.View.extend({
		className: 'todayList',
		template: _.template($('#trucksTodayTemplate').html()),
		_children: [],
		initialize: function (options) {

			if (options) {
				this.today = options.today;
			}
		},
		render: function () {

			var data = { today: this.today };

			this.$el.append(this.template(data));
			this.collection.each(function (model) {
				var itemView = new FoodTruckItemView({ model: model });

				this._children.push(itemView);
				this.$('.trucksList').append(itemView.render().el);
			}, this);

			return this;
		},
	 	remove: function () {

	 		_.each(this._children, function (view) {
	 			view.remove();
	 		});
	 		Backbone.View.prototype.remove.call(this);
	 	}
	});

})(jQuery, _, Backbone, FTF.FoodTruckItemView);