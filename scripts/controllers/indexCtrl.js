(function() {
	'use-strict';

	angular.module('indexCtrl', [])
		.controller('indexCtrl', function($scope, $mdSidenav, $rootScope, $filter) {

			console.log('index controller running...');

			$scope.data = {};
			$scope.data.gpa = false;
			$scope.data.score = false;

			$scope.openSidenav = function() {
				$mdSidenav('leftSidenav')
					.toggle()
					.then(function() {
						console.log('sidenav open');
					})
			}

			$scope.filter = function(item) {
				console.log(item);
			}

			$scope.checked = function(item) {
				console.log(item);
			}

			$scope.gpaFilter = function () {
				if (!$scope.data.gpa) {
					$rootScope.finalData = $filter('orderBy')($rootScope.info.college, '-avgGPA');
				}else {
					if ($scope.data.score) {
						$rootScope.finalData = $filter('orderBy')($rootScope.info.college, '-avgScore');
					}else
						$rootScope.finalData = $filter('orderBy')($rootScope.info.college, 'id');
				}
				$mdSidenav('leftSidenav')
					.toggle();
			}

			$scope.scoreFilter = function () {
				if (!$scope.data.score) {
					$rootScope.finalData = $filter('orderBy')($rootScope.info.college, '-avgScore');
				} else {
					if ($scope.data.gpa) {
						$rootScope.finalData = $filter('orderBy')($rootScope.info.college, '-avgGPA');
					}else
						$rootScope.finalData = $filter('orderBy')($rootScope.info.college, 'id');
				}
				$mdSidenav('leftSidenav')
					.toggle();
			}

		});
})();