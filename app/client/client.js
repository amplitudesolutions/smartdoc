'use strict';

angular.module('smartDoc.client', [])

.controller('ClientCtrl', ['$scope', '$stateParams', 'client', function($scope, $stateParams, client) {
	client.get($stateParams.clientId).then(function(res) {
		$scope.client = res;
	}, function(err) {
		console.log(err);
	});
}]);