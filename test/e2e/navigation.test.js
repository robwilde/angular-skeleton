(function() {
	'use strict';

	describe('NavigationTest', function() {

		it('I open up the site', iOpenUpTheSite);
		it('I go to the view page', iGoToTheViewPage);

		function iOpenUpTheSite() {
			goToWebsite();
			iShouldBeOnTheHomePage();
		}

		function iGoToTheViewPage() {
			iClickOnTheViewSideNavButton();
			iShouldBeOnTheViewPage();
		}

		// *** Helper Functions *** //

		function goToWebsite() {
			browser.get('index.html');
		}

		function iShouldBeOnTheHomePage() {
			expect(browser.getLocationAbsUrl()).toMatch("/home");
		}

		function iClickOnTheViewSideNavButton() {
			element(by.css('.nav-button:nth-child(2)')).click();
		}

		function iShouldBeOnTheViewPage() {
			expect(browser.getLocationAbsUrl()).toMatch("/view");
		}

	});

}());
