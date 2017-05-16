(function() {
	'use-strict';

	angular.module('collegeDetailCtrl', [])
		.controller('collegeDetailCtrl', function($scope, $routeParams, $location, collegeDetailService) {
			console.log('college detail controller...');
			$scope.collegeName = $routeParams.name;
			console.log($routeParams);

			collegeDetailService.getDetails($routeParams)
				.then(function(resp) {
					console.log(resp.data);
				}, function errorCallback(err) {
					console.log('error occured', err);
				});

			$scope.dashboard = function() {
				console.log('back to dashboard');
				$location.path('/dashboard');
			}
		});
})();