(function() {
	'use-strict';

	angular.module('collegeDetailService', [])
		.factory('collegeDetailService', function($http) {
			return {
				getDetails : function(data) {
					console.log(data);
						return $http.get('./data/records.json', {
							params : {
								collegeName : data.name
							}
						})	
				}
			}
		});
})();