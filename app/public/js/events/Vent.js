FTF = window.FTF || {};
FTF.Vent = (function ($, _, Backbone) {

	'use strict';

	return _.extend({}, Backbone.Events);
	
})(jQuery, _, Backbone);