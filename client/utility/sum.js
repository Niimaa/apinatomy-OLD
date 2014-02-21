'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['lodash'], function (_) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	console.log("Loading 'utility/sum'");


	function sum(A, plus) {
		plus = plus || function(a, b){ return a+b; };
		return _.reduce(A, plus, 0)
	}


	return sum;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
