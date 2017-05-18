(function() {
	'use-strict';

	angular.module('collegeDetailCtrl', [])
		.controller('collegeDetailCtrl', function($scope, $rootScope, $routeParams, $location) {
			
			console.log('college detail controller running...');

			// extracting object with required id
			function getById(arr, id) {
	            for (var d = 0, len = arr.length; d < len; d += 1) {
	                if (arr[d].id === parseInt(id, 10)) {
	                    return arr[d];  
	                }
	            }
	        }
			$scope.info = getById($rootScope.finalData, $routeParams.id);

			$scope.dashboard = function() {
				$location.path('/dashboard');
			}
		});
})();