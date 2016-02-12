(function() {
	'use strict';

	describe('NavigationTest', function() {

		it('I open up the site', iOpenUpTheSite);

		function iOpenUpTheSite() {
			goToWebsite();
			iShouldBeOnTheHomePage();
		}

		// *** Helper Functions *** //

		function goToWebsite() {
			browser.get('index.html');
		}

		function iShouldBeOnTheHomePage() {
			expect(browser.getLocationAbsUrl()).toMatch("/home");
		}

	});

}());
