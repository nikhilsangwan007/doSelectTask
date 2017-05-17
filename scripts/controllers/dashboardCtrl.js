(function() {
	'use-strict';

	angular.module('dashboardCtrl', [])
		.controller('dashboardCtrl', function($scope, $rootScope, $location, $filter, recordService) {
			console.log('dashboard controller...');

			$rootScope.info = {};
			$rootScope.candidates = [];
			$rootScope.gpaArr = [];

			recordService.getData()
				.then(function(resp) {
					$rootScope.info.college = resp.data;
					$rootScope.filterData = resp.data;

					angular.forEach(resp.data, function(value, key) {
						$rootScope.candidates.push(value.candidates);
					});
					angular.forEach($rootScope.candidates, function(value, key) {
						var sum = 0;
						for (var i = 0; i < value.length; i++) {
							sum += value[i].GPA;
							// console.log($rootScope.info.college[i]);
						}
							$rootScope.info.college[key].avgGPA = sum/value.length;
					});
					angular.forEach($rootScope.candidates, function(value, key) {
						var sum = 0;
						for (var i = 0; i < value.length; i++) {
							sum += value[i].score;
							// console.log($rootScope.info.college[i]);
						}
							$rootScope.info.college[key].avgScore = sum/value.length;
					});
					console.log($rootScope.info.college);
				}, function errorCallback(err) {
					console.log('error occured', err);
				});


			$rootScope.averageGPA = function(data) {
				var sum = 0;
				// console.log(data);
				for (var i = 0; i < data.length; i++) {
					sum += data[i].GPA;
				}
				return sum/data.length;
			}

			$scope.averageScore = function(data) {
				var sum = 0;
				for (var i = 0; i < data.length; i++) {
					sum += data[i].score;
				}
				return sum/data.length;
			}

			$scope.collegeDetails = function(id) {
				$location.path('/details/' + id);
			}

		});
})();