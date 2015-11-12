'use strict';

angular.module('smartDoc.dashboard', [])

.controller('DashboardCtrl', ['$scope', 'client', function($scope, client) {
	client.getAll().then(function(res) {
		$scope.clients = res;
	}, function(err) {
		console.log(err);
	});
}]);