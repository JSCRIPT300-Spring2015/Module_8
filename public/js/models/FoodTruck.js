'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: '/api/trucks',
  defaults: {
    foodTypes: [],
    payment: [],
    schedule: [],
    description: '',
    website: '',
    Facebook: '',
    Twitter: ''
  }
});
