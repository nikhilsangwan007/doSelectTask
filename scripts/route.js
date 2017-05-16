(function() {
	'use-strict';

	angular.module('appRoute', [])
		.config(function($routeProvider, $locationProvider) {

			$routeProvider
				.when('/dashboard', {
					templateUrl : '../../templates/dashboard.html',
					controller : 'dashboardCtrl'
				})
				.when('/details/:id', {
					templateUrl : '../../templates/collegeDetail.html',
					controller : 'collegeDetailCtrl'
				})
				.otherwise({
					redirectTo : '/dashboard'
				});

			$locationProvider.html5Mode({
				enabled : false,
				requireBase : false
			});
		});
})();