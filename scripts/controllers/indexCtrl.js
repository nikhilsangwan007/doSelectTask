(function() {
	'use-strict';

	angular.module('indexCtrl', [])
		.controller('indexCtrl', function($scope, $location, $mdSidenav, $rootScope, $filter, $mdDialog) {

			console.log('index controller running...');

			$scope.loaded = false;
			$mdDialog
				.show({
				clickOutsideToClose:false,
				templateUrl: '../../templates/spinnerDialog.html'
				});

			$scope.data = {
				group : 'gpa'
			};

			$scope.openSidenav = function() {
				$mdSidenav('leftSidenav')
					.toggle()
					.then(function() {
						console.log('sidenav open');
					})
			}

			$scope.hireCollege = function() {
				$location.path('/hiring');
			}

			$scope.gpaFilter = function () {
				$rootScope.finalData = $filter('orderBy')($rootScope.info.college, '-avgGPA');
				$mdSidenav('leftSidenav')
					.toggle();
			}

			$scope.scoreFilter = function () {
					$rootScope.finalData = $filter('orderBy')($rootScope.info.college, '-avgScore');
				$mdSidenav('leftSidenav')
					.toggle();
			}

			$scope.gpa_scoreFilter = function () {
					$rootScope.finalData = $filter('orderBy')($rootScope.info.college, '-gpa_scoreAvg');
				$mdSidenav('leftSidenav')
					.toggle();
			}

		});
})();