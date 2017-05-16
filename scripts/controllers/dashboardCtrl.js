(function() {
	'use-strict';

	angular.module('dashboardCtrl', [])
		.controller('dashboardCtrl', function($scope, recordService) {
			console.log('dashboard controller...');

			recordService.getData()
				.then(function(resp) {
					$scope.info = resp.data;
					console.log(resp.data);
				}, function errorCallback(err) {
					console.log('error occured', err);
				});
			
			$scope.averageGPA = function(data) {
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

		});
})();