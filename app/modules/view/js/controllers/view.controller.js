(function() {
	'use strict';

	angular
		.module('view')
		.controller('ViewController', ViewController);

	function ViewController() {
		var vm = this;
		this.numItems = 10;
		this.item = {
			name: 'Item 1',
			cost: 199.95,
			description: 'This item will change your life forever.  Use it every day and every night until you start seeing results.  If you do not see results, then buy another one and do it again.',
			available: true,
			location: 'Atlanta, GA'
		};
	}
})();
