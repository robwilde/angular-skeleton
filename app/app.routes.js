(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
	  $stateProvider
	  	.state('appLayout', {
	  		abstract: true,
	  		templateUrl: 'modules/navbar_layout/partials/navbarLayout.html',
	  		controller: 'NavbarController',
			controllerAs: 'navbar'
	  	})
	  	.state('home', {
			url: '/home',
			parent: 'appLayout',
			templateUrl: 'modules/home/partials/home.html',
			controller: 'HomeController',
			controllerAs: 'home'
		})
		.state('view', {
			url: '/view',
			parent: 'appLayout',
			templateUrl: 'modules/view/partials/view.html',
			controller: 'ViewController',
			controllerAs: 'view'
		});

	  $urlRouterProvider.otherwise('/home');
	}
})();
