(function() {
	'use-strict';

	angular.module('indexCtrl', [])
		.controller('indexCtrl', function($scope, $mdSidenav) {

			$scope.items = ['GPA', 'Test Score', 'Languages'];
			console.log('index controller...')
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

		});
})();