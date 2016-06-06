'use strict';

var Backbone = require('backbone');
var FoodTypesItemView = require('./FoodTypesItemView');

module.exports = Backbone.View.extend({
  className: 'allFoodTypesList',
  template: TFT.foodTypes,
  _children: [],
  initialize: function () {

    this.foodTypes = this.collection.getFoodTypes();
    this.foodTypes.sort();
  },
  render: function () {
    
    this.$el.append(this.template());
    this.foodTypes.forEach(function (type) {
      var itemView = new FoodTypesItemView({ type: type });
      this._children.push(itemView);
      this.$('.foodTypesList').append(itemView.render().el);
    }, this);

    return this;
  },
  remove: function () {

    this._children.forEach(function (view) {
      view.remove();
    });
    Backbone.View.prototype.remove.call(this);
  }
});