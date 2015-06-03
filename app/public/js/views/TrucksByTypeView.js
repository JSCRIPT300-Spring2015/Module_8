FTF = window.FTF || {};
FTF.TrucksByTypeView = (function ($, _, Backbone, FoodTruckItemView) {

	'use strict';

	return Backbone.View.extend({
		tagName: 'li',
		className: 'foodTrucksList',
		template: _.template($('#trucksByTypeTemplate').html()),
		_children: [],
		initialize: function (options) {

			if (options) {
				this.type = options.type;
			}
		},
		render: function () {

			var data = { type: this.type };

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