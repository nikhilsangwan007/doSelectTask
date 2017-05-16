(function() {
	'use-strict';

	angular.module('collegeDetailCtrl', [])
		.controller('collegeDetailCtrl', function($scope, $rootScope, $routeParams, $location, collegeDetailService) {
			console.log('college detail controller...');

			collegeDetailService.getDetails($routeParams)
				.then(function(resp) {
					$scope.data = resp.data;

					// extracting object with required id
					function getById(arr, id) {
			            for (var d = 0, len = arr.length; d < len; d += 1) {
			                if (arr[d].id === parseInt(id, 10)) {
			                    return arr[d];  
			                }
			            }
			        }
					$scope.info = getById($scope.data, $routeParams.id);
				}, function errorCallback(err) {
					console.log('error occured', err);
				});

			$rootScope.averageGPA = function(data) {
				var sum = 0;
				for (var i = 0; i < data.length; i++) {
					sum += data[i].GPA;
				}
				// console.log(avg);
				return sum/data.length;
			}

			$scope.averageScore = function(data) {
				var sum = 0;
				for (var i = 0; i < data.length; i++) {
					sum += data[i].score;
				}
				// console.log(avg);
				return sum/data.length;
			}

			$scope.dashboard = function() {
				console.log('back to dashboard');
				$location.path('/dashboard');
			}
		});
})();