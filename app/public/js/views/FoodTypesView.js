FTF = window.FTF || {};
FTF.FoodTypesView = (function ($, _, Backbone, FoodTypesItemView) {

	'use strict';

	return Backbone.View.extend({
		className: 'allFoodTypesList',
		template: _.template($('#foodTypesTemplate').html()),
		_children: [],
		initialize() {

			this.foodTypes = this.collection.getFoodTypes();
			this.foodTypes.sort();
		},
		render: function () {
			
			this.$el.append(this.template());
			_.each(this.foodTypes, function (type) {
				var itemView = new FoodTypesItemView({ type: type });
				this._children.push(itemView);
				this.$('.foodTypesList').append(itemView.render().el);
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

})(jQuery, _, Backbone, FTF.FoodTypesItemView);