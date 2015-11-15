angular.module('smartDoc.services', ['firebase'])

	.factory('getDBUrl', ['$location', function($location) {

    	// FOR IONIC DEVELOPMENT, THERE IS NO localhost or location to find.

	    var dbURL = null;
	    // if ($location.host() == 'localhost' || $location.host() == 'mealtimedev.firebaseapp.com') {
	      // DEV DB
	        dbURL = "https://mealtimedev.firebaseio.com";
	    // } else if ($location.host() == 'intense-inferno-9799.firebaseapp.com') {
	    // } else if ($location.host() == 'mealtimeprod.firebaseapp.com') {
	    //   dbURL = "https://mealtimeprod.firebaseio.com";
	    // }
	    
	    return {path: dbURL};
 	}])
	
	.factory('client', ['$http', '$q', function($http, $q) {

		return {
			get: function(client_id) {
				var deferred = $q.defer();
				$http.get('http://localhost:8080/api/clients/' + client_id).then(function(response) {
					deferred.resolve(response.data);
				}, function(error) {
					deferred.reject(error);
				});
				return deferred.promise;
			},
			getAll: function() {
				var deferred = $q.defer();
				$http.get('http://localhost:8080/api/clients').then(function(response) {
					deferred.resolve(response.data);
				}, function(error) {
					deferred.reject(error);
				});
				return deferred.promise;
			},
			add: function(client) {

			}
		}
	}])
;