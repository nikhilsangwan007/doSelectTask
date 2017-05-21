(function() {
	'use-strict';

	angular
		.module('spinnerDirective', [])
		.directive('spinner', function() {
			return {
				restrict : 'E',
				templateUrl : '../../templates/spinnerDirective.html'
			}
		});
})();