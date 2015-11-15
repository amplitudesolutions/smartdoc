angular.module('smartDoc.services', [])
	
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
			}
		}
	}])
;