'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['app/module', 'lodash', 'resource/service',
        'partial/amy-circuit-board/amy-tile-map/directive',
        'partial/amy-circuit-board/amy-tile/directive',
        'partial/amy-circuit-board/amy-graph-layer/directive'], function (app, _) {
//  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	app.directive('amyCircuitBoard', ['$q', function ($q) {
		return {
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

			restrict:    'E',
			replace:     true,
			templateUrl: 'partial/amy-circuit-board/view.html',
			require:     'ngModel',
			scope:       true,

			////////////////////////////////////////////////////////////////////////////////////////////////////////////

			compile: function () {
				return {
					pre: function preLink($scope, iElement, iAttrs, ngModel) {
						iElement.attr('amy-circuit-board', '');

						//////////////////// Artefact Hierarchy ////////////////////////////////////////////////////

						$scope.circuitBoard =
						$scope.artefact = {
							id:       $scope.$id,
							type:     'circuitBoard',
							show:     false,

							//// artefact hierarchy:
							parent:   $scope.$parent.artefact,
							children: [],

							//// root entity:
							entity: null // to be set
						};

						//// Announce this artefact to its parent.
						//
						$scope.artefact.parent.children.push($scope.artefact);

						//// Remove references to this tile when it is destroyed.
						//
						$scope.$on('$destroy', function () {
							_($scope.artefact.parent).pull($scope.artefact); // TODO: integrate into Artefact class
						});


						//////////////////// Getting the model value ///////////////////////////////////////////////////

						ngModel.$render = function () {
							$scope.entity = $scope.circuitBoard.entity = ngModel.$modelValue;
						};


						//////////////////// Graph Layer ///////////////////////////////////////////////////////////////

						$scope.graphLayerDeferred = $q.defer();
						$scope.circuitBoard.graphLayer = $scope.graphLayerDeferred.promise;

					}
				};
			}

			////////////////////////////////////////////////////////////////////////////////////////////////////////////
		};
	}]);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
