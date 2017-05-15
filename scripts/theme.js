(function() {
	'use-strict';

	angular.module('theme', [])

		.config(['$mdThemingProvider', function($mdThemingProvider) {
			$mdThemingProvider.theme('default')
				.primaryPalette('deep-purple')
				.accentPalette('pink')
		}]);
})();