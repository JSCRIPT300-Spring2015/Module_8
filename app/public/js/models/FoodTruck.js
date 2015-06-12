// FTF = window.FTF || {};
// FTF.FoodTruck = (function ($, _, Backbone) {

// 	'use strict';

// 	return Backbone.Model.extend({
// 	 	idAttribute: '_id',
// 	 	defaults: {
// 	 		foodTypes: [],
// 	 		payment: [],
// 	 		schedule: [],
// 	 		description: '',
// 	 		website: '',
// 	 		Facebook: '',
// 	 		Twitter: ''
// 	 	}
// 	 });

// })(jQuery, _, Backbone);

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
 	idAttribute: '_id',
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