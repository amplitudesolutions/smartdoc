'use strict';

// Declare app level module which depends on views, and components
angular.module('smartDoc', [
  'ui.router',
  'smartDoc.services',
  'smartDoc.dashboard',
  'smartDoc.client'
])

.config(function($stateProvider, $urlRouterProvider) {

    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html",
      controller: 'DashboardCtrl'
    })

    .state('client', {
    	url: "/client/{clientId}",
    	templateUrl: "client/client.html",
    	controller: 'ClientCtrl'
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/dashboard');
  })


;
