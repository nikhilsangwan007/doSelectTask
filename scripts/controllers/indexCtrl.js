(function() {
	'use-strict';

	angular.module('indexCtrl', [])
		.controller('indexCtrl', function($scope, $mdSidenav) {
			console.log('index controller...')
			$scope.openSidenav = function() {
				$mdSidenav('leftSidenav')
					.toggle()
					.then(function() {
						console.log('sidenav open');
					})
			}

		});
})();