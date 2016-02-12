(function() {
	'use strict';

	beforeEach(module('view'));

	describe('view.controller', function() {

		beforeEach(inject(function($controller) {
			this.ctrl = $controller('ViewController');
		}));

	    it('should have a the number of total items', function() {
	    	expect(this.ctrl.numItems).toBeDefined();
	    	expect(this.ctrl.numItems).toEqual(10);
	    });

		it('should have a item object with its properties', function() {
	    	expect(this.ctrl.item).toBeDefined();
	    	expect(this.ctrl.item.name).toEqual('Item 1');
	    	expect(this.ctrl.item.cost).toEqual(199.95);
	    	expect(this.ctrl.item.description).toEqual('This item will change your life forever.  Use it every day and every night until you start seeing results.  If you do not see results, then buy another one and do it again.');
	    	expect(this.ctrl.item.available).toEqual(true);
	    	expect(this.ctrl.item.location).toEqual('Atlanta, GA');
	    });
	});

}());