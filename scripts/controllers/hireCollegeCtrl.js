(function() {
	'use-strict';

	angular
		.module('hireCollegeCtrl', [])
		.controller('hireCollegeCtrl', function($scope, $rootScope, $location, $mdDialog) {
			
			$rootScope.finalData;

			$scope.bestPerformers = function(data) {
				$mdDialog.show({
					locals:{data : data},
					controller : performanceCtrl,
					templateUrl : '../../templates/performanceDialog.html',
					parent: angular.element(document.body),
			      	clickOutsideToClose:true,
			      	fullscreen: $scope.customFullscreen
				})
				.then(function(resp) {
					console.log(resp);
				})
			};

			function performanceCtrl($scope, $mdDialog, data) {
				
				$scope.students = data.candidates;

				$scope.close = function() {
					$mdDialog.cancel();
				}
			}

		});

})();