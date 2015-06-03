FTF = window.FTF || {};
FTF.FoodTrucksView = (function ($, _, Backbone, Vent, FoodTruckItemView, FoodTruckView) {

	'use strict';

	return Backbone.View.extend({
	 	className: 'allTrucksList',
	 	template: _.template($('#allFoodTrucksTemplate').html()),
	 	_children: [],
	 	render: function () {

	 		this.$el.append(this.template());

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

})(jQuery, _, Backbone, FTF.Vent, FTF.FoodTruckItemView, FTF.FoodTruckView);