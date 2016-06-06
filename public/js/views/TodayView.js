'use strict';

var Backbone = require('backbone');
var FoodTruckItemView = require('./FoodTruckItemView');

module.exports = Backbone.View.extend({
  className: 'todayList',
  template: TFT.trucksToday,
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

    this._children.forEach(function (view) {
      view.remove();
    });
    Backbone.View.prototype.remove.call(this);
  }
});