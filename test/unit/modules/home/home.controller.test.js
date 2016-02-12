(function() {
	'use strict';

	beforeEach(module('home'));

	describe('home.controller', function() {

		beforeEach(inject(function($controller) {
			this.ctrl = $controller('HomeController');
		}));

	    it('should have a title', function() {
	    	expect(this.ctrl.title).toBeDefined();
	    	expect(this.ctrl.title).toEqual('Welcome Home!');
	    });

		it('should have a message', function() {
	    	expect(this.ctrl.message).toBeDefined();
	    	expect(this.ctrl.message).toEqual('Nothing has happened since you have logged off.  Feel free to pick up where you left off and continue being awesome at doing what ever this app does!');
	    });
	});

}());