'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['lodash'], function (_) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	_.mixin({
		call: function (fn) { return fn(); }
	}, {chain: false});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
