'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['app/module'], function (ApiNATOMY) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	console.log("Loading 'resource/service'");


	ApiNATOMY.factory('ResourceService', function ($resource) {
		return $resource('/resources/ExampleData').get().$promise;
	});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
