(function() {
	'use-strict';

	angular.module('dashboardCtrl', [])
		.controller('dashboardCtrl', function($scope, $rootScope, $location, $filter, recordService) {
			console.log('dashboard controller running...');

			$rootScope.info = {};
			$rootScope.candidates = [];
			$rootScope.gpaArr = [];

			recordService.getData()
				.then(function(resp) {

					$rootScope.info.college = resp.data;

					angular.forEach(resp.data, function(value, key) {
						$rootScope.candidates.push(value.candidates);
					});
					angular.forEach($rootScope.candidates, function(value, key) {
						var sum = 0;
						for (var i = 0; i < value.length; i++) {
							sum += value[i].GPA;
						}
						
						$rootScope.info.college[key].avgGPA = sum/value.length;
					});
					angular.forEach($rootScope.candidates, function(value, key) {
						var sum = 0;
						for (var i = 0; i < value.length; i++) {
							sum += value[i].score;
						}

						$rootScope.info.college[key].avgScore = sum/value.length;
					});

					$rootScope.finalData = $rootScope.info.college;

				}, function errorCallback(err) {
					console.log('error occured', err);
				});

			$scope.collegeDetails = function(id) {
				$location.path('/details/' + id);
			}

		});
})();