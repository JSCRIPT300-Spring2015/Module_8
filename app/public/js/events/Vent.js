// FTF = window.FTF || {};
// FTF.Vent = (function ($, _, Backbone) {

// 	'use strict';

// 	return _.extend({}, Backbone.Events);
	
// })(jQuery, _, Backbone);

'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

module.exports = _.extend({}, Backbone.Events);