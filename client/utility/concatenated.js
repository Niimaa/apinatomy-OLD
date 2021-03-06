'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['lodash'], function (_) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	_.mixin({ concatenated: function (collectionOfArrays) {
		var result = [];
		_(collectionOfArrays).forEach(function (array) {
			result = result.concat(array);
		});
		return result;
	}}, {chain: true});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
