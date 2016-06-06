'use strict';

var Backbone = require('backbone');
var FoodTruckItemView = require('./FoodTruckItemView');

module.exports = Backbone.View.extend({
  tagName: 'li',
  className: 'foodTrucksList',
  template: TFT.trucksByType,
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

    this._children.forEach(function (view) {
      view.remove();
    });
    Backbone.View.prototype.remove.call(this);
  }
});