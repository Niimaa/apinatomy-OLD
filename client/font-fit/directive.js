'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['lodash', 'jquery', 'app/module'], function (_, $, app) {
//  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	app.directive('fontFit', ['$window', function ($window) {
		return {
			restrict: 'A',

			link: function ($scope, iElement/*, iAttrs, controller*/) {

				var size = {
					height: iElement.height(),
					width: iElement.width()
				};

				function setFontSize() {
					iElement.css('fontSize', Math.min(.2 * size.height, .13 * size.width));
				}

				$($window).resize(_.throttle(function onResize() {
					var newSize = {
						width : iElement.width(),
						height: iElement.height()
					};
					if (!_(size.width).approx(newSize.width) || !_(size.height).approx(newSize.height)) {
						_(size).assign(newSize);
						setFontSize();
					}
				}, 50));

				//// set the font-size now

				setFontSize();

			}
		};
	}]);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
