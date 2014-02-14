'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['underscore'], function (_) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	console.log("Loading 'utility/sum'");


	return function (A, plus) {
		plus = plus || function(a, b){ return a+b; };
		return _.reduce(A, plus, 0)
	};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
