'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['lodash', 'angular', 'app/module',
        'amy-circuit-board/CircuitBoardArtefact',
        'css!amy-circuit-board/amy-tile-map/style',
        '$bind/service',
        'defaults/service'
], function (_, ng, app, CircuitBoardArtefact) {
//  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	app.directive('amyTileMap', ['ResourceService', 'RecursionHelper', 'defaults', function (ResourceService, RecursionHelper, defaults) {


		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		var generateTileMapDefaults = defaults({
			layout:  " 'rowsOfTiles' ",
			spacing: " 2 "
		});


		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		return {
			restrict:    'E',
			replace:     false,
			templateUrl: 'amy-circuit-board/amy-tile-map/view.html',
			require:     'ngModel',
			scope:       true,

			////////////////////////////////////////////////////////////////////////////////////////////////////////////
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

			compile: function () {
				return {
					pre: function preLink($scope, iElement, iAttrs, ngModel) {
						iElement.attr('amy-tile-map', '');

						//////////////////// Getting the model value ///////////////////////////////////////////////////

						ngModel.$render = function () {
							$scope.entity = ngModel.$modelValue;

							//////////////////// TileMap / Artefact Hierarchy //////////////////////////////////////////

							//// This artefact:
							//
							$scope.tileMap =
							$scope.artefact = new CircuitBoardArtefact.TileMapArtefact({
								id:     $scope.$id,
								$scope: $scope
							});


							//////////////////// Keeping Track of Tile-map Position and Size ///////////////////////////

							iAttrs.$observe('position', function (newPosition) {
								if (newPosition) {
									$scope.tileMap.position = $scope.$eval(newPosition);
								}
							});


							//////////////////// Loading sub-entities //////////////////////////////////////////////////

							$scope.entity._promise.then(function () {
								ResourceService.entities(_($scope.entity.sub).map(function (sub) {
									return sub.entity._id;
								}).value());
							});


							//////////////////// Tile-map Styling //////////////////////////////////////////////////////

							$scope.entity._promise.then(function () {
								$scope.styling = generateTileMapDefaults($scope.entity.tileMap, {});
							});

						};

					}
				}
			}

			////////////////////////////////////////////////////////////////////////////////////////////////////////////
		};
	}]);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
