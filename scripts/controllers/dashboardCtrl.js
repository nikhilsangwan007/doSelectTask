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
		});

})();