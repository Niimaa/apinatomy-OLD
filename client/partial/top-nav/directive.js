'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['app/module'], function (app) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	app.directive('amyTopNav', [function () {
		return {
			restrict   : 'E',
			replace    : true,
			templateUrl: 'partial/top-nav/view.html',
			scope: false,
			controller: function ($scope) {}
		};
	}]);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
