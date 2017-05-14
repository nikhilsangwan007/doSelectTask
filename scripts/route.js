(function() {
	'use-strict';

	angular.module('appRoute', [])
		.config(function($routeProvider, $locationProvider) {

			$routeProvider
				.when('/dashboard', {
					templateUrl : '../templates/dashboard.html',
					controller : 'dashboardCtrl'
				})
				.otherwise({
					redirectTo : '/dashboard'
				});

			$locationProvider.html5Mode(true);
		});
})();