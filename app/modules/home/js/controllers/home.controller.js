(function() {
	'use strict';

	angular
		.module('home')
		.controller('HomeController', HomeController);

	function HomeController() {
		var vm = this;
		vm.title = 'Welcome Home!';
		vm.message = 'Nothing has happened since you have logged off.  Feel free to pick up where you left off and continue being awesome at doing what ever this app does!';
	}
})();
