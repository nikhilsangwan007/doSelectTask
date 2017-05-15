(function() {
	'use-strict';

	angular.module('recordService', [])
		.factory('recordService', function($http) {
			return {
				getData : function() {
					return $http.get('./data/records.json');
				}
			}
		});
		
})();