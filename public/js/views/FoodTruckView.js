'use strict';

var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  className: 'truckDetail',
  template: TFT.foodTruck,
  render: function () {

    this.$el.append(this.template(this.model.toJSON()));

    return this;
  }
});