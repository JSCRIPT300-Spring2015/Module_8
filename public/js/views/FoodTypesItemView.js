'use strict';

var Backbone = require('backbone');
var vent = require('../events/Vent');

module.exports = Backbone.View.extend({
  tagName: 'li',
  className: 'foodTypesList__item',
  template: TFT.foodTypeListItem,
  initialize: function (options) {

    if (options) {
      this.type = options.type;
    }
  },
  events: {
    'click a': 'handleClick'
  },
  render: function () {

    var data = { type: this.type };

    this.$el.append(this.template(data));

    return this;
  },
  handleClick: function (ev) {

    ev.preventDefault();
    var path  = ev.currentTarget.href.replace(location.origin, '');
    vent.trigger('foodType:selected', { type: this.type, path: path });
  }
});
